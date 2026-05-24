// ============================================
// Ankle 101 Assessment — Application Controller
// Manages navigation, user input, timer / counter
// interactions, score calculation, and results
// rendering. Bilingual AR/EN via I18n.
// ============================================

(function () {
  'use strict';

  // ============================================
  // State
  // ============================================
  const state = {
    currentStep: 0,
    answers: {},
    timer: null,
    counter: null,
    results: null
  };

  // Screen ids in step order
  const SCREENS = [
    'screen-welcome',      // 0
    'screen-sport',        // 1
    'screen-q1',           // 2
    'screen-q2',           // 3
    'screen-q3',           // 4
    'screen-confidence',   // 5
    'screen-phase2',       // 6
    'screen-balance',      // 7
    'screen-calfraise',    // 8
    'screen-decel',        // 9
    'screen-results'       // 10
  ];

  const PHASE_1_END   = 5;
  const PHASE_2_END   = 9;
  const RESULTS_STEP  = 10;

  // ============================================
  // Helpers
  // ============================================
  const $ = (id) => document.getElementById(id);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ============================================
  // Navigation
  // ============================================
  function goToStep(step) {
    const prev = $(SCREENS[state.currentStep]);
    const next = $(SCREENS[step]);

    // Slide previous screen out
    if (prev) {
      prev.classList.remove('active');
      prev.classList.add('exit-left');
      setTimeout(() => prev.classList.remove('exit-left'), 650);
    }

    state.currentStep = step;

    // Slide next screen in (slight delay for smoother chain)
    if (next) {
      setTimeout(() => {
        next.classList.add('active');
        next.scrollTop = 0;
      }, 50);
    }

    updateProgress();

    // Show progress bar after welcome
    if (step > 0) $('progressContainer').style.display = 'block';
  }

  function nextStep() {
    if (state.currentStep < RESULTS_STEP) goToStep(state.currentStep + 1);
  }

  function updateProgress() {
    const s = state.currentStep;
    const pct = s === 0 ? 0 : (s / (SCREENS.length - 1)) * 100;
    $('progressFill').style.width = pct + '%';

    const p1 = $('phaseLabel1');
    const p2 = $('phaseLabel2');
    const pr = $('phaseLabelR');

    p1.className = 'progress-phase';
    p2.className = 'progress-phase';
    pr.className = 'progress-phase';

    if (s <= PHASE_1_END) {
      p1.classList.add('active');
    } else if (s <= PHASE_2_END) {
      p1.classList.add('completed');
      p2.classList.add('active');
    } else {
      p1.classList.add('completed');
      p2.classList.add('completed');
      pr.classList.add('active');
    }
  }

  // ============================================
  // Option-card questions
  // ============================================
  function setupOptionCards() {
    document.addEventListener('click', function (e) {
      const card = e.target.closest('.option-card');
      if (!card) return;

      const container  = card.closest('.option-cards');
      const questionId = container.dataset.question;
      const score      = parseInt(card.dataset.score, 10);

      // Select
      container.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // Store
      state.answers[questionId] = score;

      // Auto-advance (decel_drop triggers results instead)
      if (questionId === 'decel_drop') {
        setTimeout(showCalculating, 450);
      } else {
        setTimeout(nextStep, 400);
      }
    });
  }

  // ============================================
  // Confidence sliders
  // ============================================
  function setupSliders() {
    const confSlider = $('confidenceSlider');
    const fearSlider = $('fearSlider');

    function getConfLabel(v) {
      return I18n.t('confidence.level.' + v);
    }
    function getFearLabel(v) {
      return I18n.t('fear.level.' + v);
    }

    function sync(slider, numEl, labelEl, labelFn) {
      const v = parseInt(slider.value, 10);
      numEl.textContent   = v;
      labelEl.textContent = labelFn(v);
      // Fill the track
      const pct = ((v - 1) / 9) * 100;
      slider.style.background =
        'linear-gradient(to right, var(--accent) ' + pct + '%, var(--bg-card) ' + pct + '%)';
    }

    confSlider.addEventListener('input', () =>
      sync(confSlider, $('confidenceValue'), $('confidenceLabel'), getConfLabel));
    fearSlider.addEventListener('input', () =>
      sync(fearSlider, $('fearValue'), $('fearLabel'), getFearLabel));

    // Init
    sync(confSlider, $('confidenceValue'), $('confidenceLabel'), getConfLabel);
    sync(fearSlider, $('fearValue'), $('fearLabel'), getFearLabel);

    $('confidenceNext').addEventListener('click', () => {
      state.answers.movement_confidence = parseInt(confSlider.value, 10);
      state.answers.fear_reinjury       = parseInt(fearSlider.value, 10);
      nextStep();
    });
  }

  // ============================================
  // Balance timer test
  // ============================================
  function setupBalanceTest() {
    const CIRC = 2 * Math.PI * 90;          // matches SVG r=90
    const ring = $('timerRingFill');
    ring.style.strokeDasharray  = CIRC;
    ring.style.strokeDashoffset = CIRC;

    $('balanceStart').addEventListener('click', () => {
      $('balanceStart').style.display = 'none';
      $('balanceStop').style.display  = 'block';

      state.timer = new AssessmentTimer({
        maxTime: 30,
        onTick(elapsed, max) {
          $('timerValue').textContent = elapsed.toFixed(1);
          ring.style.strokeDashoffset = CIRC - (elapsed / max) * CIRC;
        },
        onComplete(elapsed) {
          finishBalance(elapsed);
        }
      });
      state.timer.start();
    });

    $('balanceStop').addEventListener('click', () => {
      if (state.timer) finishBalance(state.timer.stop());
    });
  }

  function finishBalance(elapsed) {
    state.answers.balance_hold_raw = Math.floor(elapsed);
    $('balanceStop').style.display = 'none';
    $('timerValue').textContent = Math.floor(elapsed) + 's';
    setTimeout(nextStep, 800);
  }

  // ============================================
  // Calf-raise counter
  // ============================================
  function setupCalfTest() {
    state.counter = new RepCounter(function (count) {
      const el = $('calfCount');
      el.textContent = count;
      el.style.transform = 'scale(1.15)';
      setTimeout(() => { el.style.transform = 'scale(1)'; }, 150);
    });

    $('calfCountBtn').addEventListener('click', function (e) {
      state.counter.increment();

      // Ripple
      const btn    = e.currentTarget;
      const rect   = btn.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.classList.add('tap-ripple');
      ripple.style.width  = size + 'px';
      ripple.style.height = size + 'px';
      ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });

    $('calfDone').addEventListener('click', () => {
      state.answers.calf_raises_raw = state.counter.getCount();
      nextStep();
    });
  }

  // ============================================
  // Deceleration-drop test
  // ============================================
  function setupDecelTest() {
    $('decelSkip').addEventListener('click', () => {
      state.answers.decel_drop = 5;
      showCalculating();
    });
  }

  // ============================================
  // Calculating overlay → results
  // ============================================
  function showCalculating() {
    const overlay = $('calculatingOverlay');
    overlay.classList.add('active');

    state.results = ScoringEngine.calculate(state.answers);

    setTimeout(() => {
      overlay.classList.remove('active');
      goToStep(RESULTS_STEP);
      setTimeout(renderResults, 350);
    }, 2000);
  }

  // ============================================
  // Render results page
  // ============================================
  function renderResults() {
    const { total, categories, tier, isAcute } = state.results;

    // ── Animated score ring ──
    animateScore(total, tier);

    // ── Tier badge ──
    $('tierBadge').innerHTML =
      '<div class="tier-badge-inner" style="background:' + tier.colorGlow +
      ';border:1px solid ' + tier.color +
      ';color:' + tier.color + ';">' +
      tier.emoji + ' ' + tier.label +
      ' <span class="tier-sublabel">— ' + tier.sublabel + '</span></div>';

    // ── Acute warning ──
    if (isAcute) $('acuteWarning').style.display = 'block';

    // ── Radar chart ──
    const chartData = [
      { label: categories.history.label,      value: categories.history.percentage },
      { label: categories.confidence.label,   value: categories.confidence.percentage },
      { label: categories.balance.label,      value: categories.balance.percentage },
      { label: categories.endurance.label,    value: categories.endurance.percentage },
      { label: categories.deceleration.label, value: categories.deceleration.percentage }
    ];

    setTimeout(() => {
      RadarChart.draw('radarChart', chartData, {
        accentColor: tier.color,
        accentRGB:   tier.colorRGB
      });
    }, 500);

    // ── Category bars ──
    renderCategoryBars(categories);

    // ── Insights ──
    $('insightsText').textContent = ScoringEngine.getInsights(tier, categories);

    // ── Action steps ──
    var steps = ScoringEngine.getActionableSteps(tier);
    $('actionStepsList').innerHTML = steps.map(function (s, i) {
      return '<div class="action-step animate-in" style="animation-delay:' +
        (0.8 + i * 0.15) + 's;">' +
        '<div class="action-step-number">' + (i + 1) + '</div>' +
        '<h4>' + s.title + '</h4>' +
        '<p>' + s.description + '</p></div>';
    }).join('');

    // ── CTA ──
    $('ctaText').textContent = ScoringEngine.getCTAText(tier);
  }

  // ── Animated counter + ring fill ──
  function animateScore(target, tier) {
    const el   = $('scoreValue');
    const ring = $('scoreRingFill');
    const CIRC = 2 * Math.PI * 80;           // SVG r=80

    ring.style.strokeDasharray  = CIRC;
    ring.style.strokeDashoffset = CIRC;
    ring.style.stroke           = tier.color;

    const duration = 1500;
    const t0       = performance.now();

    function frame(now) {
      const p     = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);           // ease-out cubic
      const val   = Math.round(eased * target);

      el.textContent = val;
      el.style.color = tier.color;
      ring.style.strokeDashoffset = CIRC - (eased * target / 100) * CIRC;

      if (p < 1) requestAnimationFrame(frame);
    }

    setTimeout(() => requestAnimationFrame(frame), 300);
  }

  // ── Horizontal bar breakdown ──
  function renderCategoryBars(categories) {
    const order = ['history', 'confidence', 'balance', 'endurance', 'deceleration'];
    var html = order.map(function (key, i) {
      var c = categories[key];
      return '<div class="category-bar animate-in" style="animation-delay:' +
        (0.5 + i * 0.1) + 's;">' +
        '<div class="category-bar-header">' +
        '<span class="category-bar-label">' + c.label + '</span>' +
        '<span class="category-bar-value">' + c.score + '/' + c.max + '</span></div>' +
        '<div class="category-bar-track">' +
        '<div class="category-bar-fill" id="bar-' + key + '" style="width:0%;"></div>' +
        '</div></div>';
    }).join('');

    $('categoryBars').innerHTML = html;

    // Animate after DOM paint
    setTimeout(function () {
      order.forEach(function (key) {
        var bar = document.getElementById('bar-' + key);
        if (bar) bar.style.width = categories[key].percentage + '%';
      });
    }, 800);
  }

  // ============================================
  // Email capture
  // ============================================
  function setupEmailCapture() {
    $('emailSubmit').addEventListener('click', function () {
      var email = $('emailInput').value.trim();
      if (email && email.includes('@') && email.includes('.')) {
        $('emailSubmit').textContent = I18n.t('results.email.saved');
        $('emailSubmit').disabled    = true;
        $('emailInput').disabled     = true;
        // Persist locally (production: send to backend / email service)
        try {
          localStorage.setItem('ankle101_email',   email);
          localStorage.setItem('ankle101_results', JSON.stringify(state.results));
        } catch (_) { /* quota or private browsing */ }
      } else {
        $('emailInput').style.borderColor = 'var(--color-danger)';
        setTimeout(function () { $('emailInput').style.borderColor = ''; }, 2000);
      }
    });
  }

  // ============================================
  // Retake
  // ============================================
  function setupRetake() {
    $('retakeBtn').addEventListener('click', function () {
      state.answers = {};
      state.results = null;
      state.currentStep = 0;
      if (state.timer)   state.timer.reset();
      if (state.counter) state.counter.reset();

      // Reset visual state
      $$('.option-card.selected').forEach(function (c) { c.classList.remove('selected'); });
      $('confidenceSlider').value = 5;
      $('fearSlider').value       = 5;
      $('timerValue').textContent  = '0.0';
      $('calfCount').textContent   = '0';
      $('balanceStart').style.display = 'block';
      $('balanceStop').style.display  = 'none';
      $('progressContainer').style.display = 'none';
      $('emailSubmit').textContent = I18n.t('results.email.send');
      $('emailSubmit').disabled    = false;
      $('emailInput').disabled     = false;
      $('emailInput').value        = '';
      $('acuteWarning').style.display = 'none';

      // Reset timer ring
      var circ = 2 * Math.PI * 90;
      $('timerRingFill').style.strokeDashoffset = circ;

      // Remove all active screens, show welcome
      $$('.screen').forEach(function (s) { s.classList.remove('active', 'exit-left'); });
      $('screen-welcome').classList.add('active');

      // Re-init slider visuals
      setupSliders();
    });
  }

  // ============================================
  // Language Toggle
  // ============================================
  function setupLangToggle() {
    $('langToggle').addEventListener('click', function () {
      var newLang = I18n.currentLang === 'ar' ? 'en' : 'ar';
      I18n.setLang(newLang);

      // Re-sync slider labels to new language
      syncSlidersToCurrentLang();

      // If results are currently visible, re-render them
      if (state.currentStep === RESULTS_STEP && state.results) {
        // Recalculate with new language labels
        state.results = ScoringEngine.calculate(state.answers);
        renderResults();
      }
    });
  }

  function syncSlidersToCurrentLang() {
    var confSlider = $('confidenceSlider');
    var fearSlider = $('fearSlider');
    if (confSlider && fearSlider) {
      var cv = parseInt(confSlider.value, 10);
      var fv = parseInt(fearSlider.value, 10);
      $('confidenceLabel').textContent = I18n.t('confidence.level.' + cv);
      $('fearLabel').textContent       = I18n.t('fear.level.' + fv);
    }
  }

  // ============================================
  // Init
  // ============================================
  function init() {
    // Initialize i18n first
    I18n.init();

    $('startBtn').addEventListener('click', nextStep);
    $('phase2Start').addEventListener('click', nextStep);

    setupOptionCards();
    setupSliders();
    setupBalanceTest();
    setupCalfTest();
    setupDecelTest();
    setupEmailCapture();
    setupRetake();
    setupLangToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
