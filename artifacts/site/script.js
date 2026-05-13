// ════════════════════════════════════════════════════════════════════════════════════
// The Nuvance Portfolio — Catalog
// Subtle scroll reveals + shelf-register section indicator
// ════════════════════════════════════════════════════════════════════════════════════

(function () {

  // ─── Scroll-reveal observer ───
  const revealTargets = document.querySelectorAll(
    'section .section-header, .opening-body, .findings-stack, .cohort-grid, .archive-sub, .colophon-grid, .colophon-foot'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    // No IntersectionObserver — reveal everything immediately
    revealTargets.forEach(el => el.classList.add('in-view'));
  }


  // ─── Shelf register: track current section ───
  const sections = [
    { id: 'opening',    label: 'to the reader',     numeral: 'i' },
    { id: 'findings',   label: 'three findings',    numeral: 'ii' },
    { id: 'cohort',     label: 'the seven',         numeral: 'iii' },
    { id: 'archive',    label: 'the archive',       numeral: 'iv' },
    { id: 'colophon',   label: 'colophon',          numeral: 'v' }
  ];

  const shelfNumEl = document.getElementById('shelfNum');
  const shelfSectionEl = document.getElementById('shelfSection');

  function updateShelf() {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let current = { numeral: 'i', label: 'masthead' };

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el && el.offsetTop <= scrollPos) {
        current = s;
      }
    }

    if (shelfNumEl.textContent !== current.numeral) {
      shelfNumEl.textContent = current.numeral;
      shelfSectionEl.textContent = current.label;
    }
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateShelf();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateShelf();

})();
