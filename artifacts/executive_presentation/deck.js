/* ╔════════════════════════════════════════════════════════════════════════╗
   ║  Executive Presentation — click-through deck navigation                  ║
   ╚════════════════════════════════════════════════════════════════════════╝ */

(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  const $cur = document.getElementById('page-current');
  const $tot = document.getElementById('page-total');
  const $prev = document.getElementById('prev');
  const $next = document.getElementById('next');

  let idx = 0;
  $tot.textContent = String(total);

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    $cur.textContent = String(idx + 1);
    $prev.disabled = idx === 0;
    $next.disabled = idx === total - 1;
  }

  function go(delta) {
    const next = idx + delta;
    if (next < 0 || next >= total) return;
    idx = next;
    render();
  }

  function jumpTo(n) {
    if (n < 0 || n >= total) return;
    idx = n;
    render();
  }

  $prev.addEventListener('click', () => go(-1));
  $next.addEventListener('click', () => go(1));

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault(); go(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault(); go(-1);
    } else if (e.key === 'Home') {
      e.preventDefault(); jumpTo(0);
    } else if (e.key === 'End') {
      e.preventDefault(); jumpTo(total - 1);
    } else if (/^[0-9]$/.test(e.key)) {
      // numeric quick-jump (1-9 maps to slide 1-9; 0 = slide 10)
      const n = e.key === '0' ? 9 : parseInt(e.key, 10) - 1;
      if (n < total) jumpTo(n);
    }
  });

  // Click anywhere to advance (except on nav buttons)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav') || e.target.closest('a') || e.target.closest('button')) return;
    go(1);
  });

  // Touch swipe support
  let touchStartX = null;
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
    touchStartX = null;
  }, { passive: true });

  render();
})();
