(() => {
  const root = document.documentElement;
  const system = matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try { preference = localStorage.getItem('theme'); } catch { /* storage can be blocked */ }
  const apply = () => {
    root.dataset.theme = preference === 'dark' || (!preference && system.matches) ? 'dark' : 'light';
  };
  if (!['dark', 'light'].includes(preference)) preference = undefined;
  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme');
    button.hidden = false;
    const sync = () => button.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', preference); } catch { /* current page still works */ }
      apply();
      sync();
    });
    system.addEventListener('change', sync);
    sync();

    const sections = [...document.querySelectorAll('.toc a')].map(link => [link, document.getElementById(decodeURIComponent(link.hash.slice(1)))]);
    if (!sections.length) return;
    const offset = parseFloat(getComputedStyle(sections[0][1]).scrollMarginTop) + 1;
    let current;
    const updateToc = () => {
      const next = sections.findLast(([, heading]) => heading.getBoundingClientRect().top <= offset)?.[0];
      if (next === current) return;
      current?.removeAttribute('aria-current');
      next?.setAttribute('aria-current', 'location');
      current = next;
    };
    addEventListener('scroll', updateToc, { passive: true });
    addEventListener('hashchange', updateToc);
    addEventListener('load', updateToc);
    addEventListener('resize', updateToc);
    updateToc();
  });
})();
