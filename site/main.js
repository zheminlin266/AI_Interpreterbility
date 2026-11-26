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
  });

  document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('.toc');
    const toggle = toc?.querySelector('.toc-toggle');
    const nav = toc?.querySelector('.toc-nav');
    if (!toggle || !nav) return;

    const setExpanded = (expanded) => {
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.setAttribute('aria-label', expanded ? toggle.dataset.collapse : toggle.dataset.expand);
      if (!expanded && nav.contains(document.activeElement)) toggle.focus({ preventScroll: true });
      nav.inert = !expanded;
      nav.setAttribute('aria-hidden', String(!expanded));
      nav.tabIndex = expanded ? 0 : -1;
    };
    setExpanded(true);
    toggle.addEventListener('click', () => setExpanded(toggle.getAttribute('aria-expanded') === 'false'));
    toggle.hidden = false;

    const links = new Map();
    for (const link of nav.querySelectorAll('a[href^="#"]')) {
      const heading = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (heading) links.set(heading, link);
    }
    let current = links.values().next().value;
    if (!current) return;
    current.setAttribute('aria-current', 'location');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      const first = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      // Keep the current section when no heading enters the reading band.
      const next = first && links.get(first.target);
      if (!next || next === current) return;
      current.removeAttribute('aria-current');
      next.setAttribute('aria-current', 'location');
      current = next;
    }, { rootMargin: '-96px 0px -62% 0px', threshold: [0, 1] });
    for (const heading of links.keys()) observer.observe(heading);
  });
})();
