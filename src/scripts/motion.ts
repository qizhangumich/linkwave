/**
 * Motion layer. Progressive enhancement only: without this script every element is visible
 * and static. With reduced motion requested, nothing here runs.
 *
 * 1. Scroll reveals for elements that start below the fold.
 * 2. Position meters for the swipeable rails used on phones.
 */

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- 1. scroll reveals ----------
const UP = [
  '.section-header > *',
  '.metric',
  '.def-grid > div',
  '.product__body',
  '.solutions__tab',
  '.solution__text',
  '.scale__step',
  '.workflow > li',
  '.flagship__rail > div',
  '.flagship__foot > *',
  '.reliability__points > div',
  '.regions__row',
  '.controls-row > *',
  '.engineering__aside',
  '.cta-band__title',
  '.cta-band__body',
  '.highlights > div',
  '.spec__group',
  '.pmeta__col',
  '.case-row',
  '.case-data dl > div',
  '.plist__body',
  '.msteps li',
  '.interfaces',
  '.inputs li',
  '.stages > li',
  '.esupport > div',
  '.esim__text',
  '.docs__group',
  '.smeta__col',
  '.link-list li',
  '.node__button',
  '.footer__top > *',
].join(',');

if (!reduce && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
  );

  const fold = window.innerHeight;
  const arm = (el: HTMLElement, kind: 'up' | 'figure' | 'rule', index = 0) => {
    // Anything already on screen at load stays as it is: no flash, no waiting.
    const nested = el.parentElement?.closest('[data-reveal="up"], [data-reveal="figure"]');
    if (el.getBoundingClientRect().top < fold || nested) return;
    el.dataset.reveal = kind;
    el.style.setProperty('--i', String(Math.min(index, 5)));
    observer.observe(el);
  };

  document.querySelectorAll<HTMLElement>('.section-header').forEach((el) => arm(el, 'rule'));
  document.querySelectorAll<HTMLElement>('.figure').forEach((el) => {
    const siblings = [...(el.parentElement?.parentElement?.children ?? [])];
    arm(el, 'figure', Math.max(0, siblings.indexOf(el.parentElement as Element)) % 3);
  });
  document.querySelectorAll<HTMLElement>(UP).forEach((el) => {
    const row = [...(el.parentElement?.children ?? [])].filter((c) => c.matches(UP));
    arm(el, 'up', row.indexOf(el) % 6);
  });
}

// ---------- 2. rail meters ----------
const pad = (n: number) => String(n).padStart(2, '0');

document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
  const items = [...rail.children] as HTMLElement[];
  if (items.length < 2) return;

  const meter = document.createElement('div');
  meter.className = 'rail-meter';
  meter.setAttribute('aria-hidden', 'true');
  meter.innerHTML = `<span class="label" data-count></span><span class="rail-meter__track"><span class="rail-meter__bar"></span></span><span class="label">Swipe</span>`;
  meter.style.setProperty('--count', String(items.length));
  rail.after(meter);
  const count = meter.querySelector<HTMLElement>('[data-count]')!;

  let frame = 0;
  const update = () => {
    frame = 0;
    const step = items[1].offsetLeft - items[0].offsetLeft || 1;
    const at = Math.min(items.length - 1, Math.max(0, Math.round(rail.scrollLeft / step)));
    meter.style.setProperty('--at', String(at));
    count.textContent = `${pad(at + 1)} / ${pad(items.length)}`;
  };
  rail.addEventListener('scroll', () => (frame ||= requestAnimationFrame(update)), { passive: true });
  update();
});
