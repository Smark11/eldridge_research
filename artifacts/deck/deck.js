(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prev = document.getElementById('prev');
  const next = document.getElementById('next-btn');
  const currentEl = document.getElementById('page-current');
  const totalEl = document.getElementById('page-total');

  let idx = 0;
  totalEl.textContent = slides.length;

  function go(n) {
    idx = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    currentEl.textContent = idx + 1;
    prev.disabled = idx === 0;
    next.disabled = idx === slides.length - 1;
  }

  prev.addEventListener('click', () => go(idx - 1));
  next.addEventListener('click', () => go(idx + 1));

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      go(idx + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      go(idx - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      go(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      go(slides.length - 1);
    } else if (e.key === 'Escape') {
      // Overview behavior — currently no-op; reserved for future overview mode
    }
  });

  // Swipe (touch) support
  let touchStartX = null;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) go(dx < 0 ? idx + 1 : idx - 1);
    touchStartX = null;
  }, { passive: true });

  go(0);
})();
