/* ------------------------------------------------------------------
 * main.js — renders content.js into the page and wires up behaviour:
 * language toggle, theme toggle, mobile menu, active-section nav,
 * scroll reveal, the hero "pipeline" terminal and copy-to-clipboard.
 * No framework: plain DOM, so the whole site ships ~15 KB of JS.
 * ------------------------------------------------------------------ */

import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/jetbrains-mono';
import './style.css';
import { content, links } from './content.js';

/* ---------- small helpers ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Escape text before putting it into innerHTML.
const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// localStorage can throw (private mode, blocked storage). Never let it break the page.
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

/* ---------- icons (stroke icons, 24×24, ISC-style paths) ---------- */

const ICONS = {
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  brain: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/>',
  git: '<path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.3 6.3 2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1"/><circle cx="12" cy="12" r="2"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  arrow: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  down: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
};

const icon = (name, cls = 'i') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

// Responsive portrait: the browser picks the smallest file that is sharp enough.
const PORTRAIT_SIZES = '(min-width: 1000px) 420px, (min-width: 600px) 60vw, 88vw';
const srcset = (ext) => [480, 800, 1200].map((w) => `/img/faiz-${w}.${ext} ${w}w`).join(', ');

const tags = (list = []) => `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;

/* ---------- state ---------- */

let lang = store.get('lang') || ((navigator.language || 'en').toLowerCase().startsWith('it') ? 'it' : 'en');
if (!content[lang]) lang = 'en';

/* ---------- section templates ---------- */

const sectionHead = (kicker, title, intro = '') => `
  <header class="section__head reveal">
    <p class="kicker">${esc(kicker)}</p>
    <h2 class="section__title">${esc(title)}</h2>
    ${intro ? `<p class="section__intro">${esc(intro)}</p>` : ''}
  </header>`;

function heroTpl(t) {
  const h = t.hero;
  return `
  <section class="hero" id="top" aria-labelledby="hero-name">
    <div class="hero__grid-bg" aria-hidden="true"></div>
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="status reveal"><span class="status__dot" aria-hidden="true"></span>${esc(h.status)}</p>
        <h1 class="hero__name reveal" id="hero-name">${esc(h.first)}<br /><span>${esc(h.last)}</span></h1>
        <p class="hero__role reveal">${esc(h.role)}</p>
        <p class="hero__pitch reveal">${esc(h.pitch)}</p>
        <div class="hero__cta reveal">
          <a class="btn btn--primary" href="#projects">${esc(h.ctaPrimary)} ${icon('arrow')}</a>
          <a class="btn btn--ghost" href="${links.cv}" download>${icon('down')} ${esc(h.ctaCv)}</a>
        </div>
      </div>

      <figure class="portrait-wrap reveal">
        <div class="portrait">
          <picture>
            <source type="image/avif" srcset="${srcset('avif')}" sizes="${PORTRAIT_SIZES}" />
            <source type="image/webp" srcset="${srcset('webp')}" sizes="${PORTRAIT_SIZES}" />
            <img src="/img/faiz-800.jpg" srcset="${srcset('jpg')}" sizes="${PORTRAIT_SIZES}"
                 width="800" height="1000" alt="${esc(h.portraitAlt)}" fetchpriority="high" decoding="async" />
          </picture>
          <span class="portrait__scan" aria-hidden="true"></span>
          <span class="corner corner--tl" aria-hidden="true"></span>
          <span class="corner corner--tr" aria-hidden="true"></span>
          <span class="corner corner--bl" aria-hidden="true"></span>
          <span class="corner corner--br" aria-hidden="true"></span>
        </div>
        <figcaption class="portrait__cap">
          <span>${esc(h.portraitCaption)}</span>
          <span class="portrait__badge"><i aria-hidden="true"></i>${esc(h.portraitBadge)}</span>
        </figcaption>
      </figure>
    </div>

    <div class="container">
      <dl class="stats">
        ${t.stats.map((s) => `
          <div class="stat reveal">
            <dt class="stat__value">${esc(s.value)}</dt>
            <dd class="stat__label">${esc(s.label)}</dd>
          </div>`).join('')}
      </dl>
    </div>
  </section>`;
}

function aboutTpl(t) {
  const a = t.about;
  const h = t.hero;
  return `
  <section class="section" id="about" aria-labelledby="about-title">
    <div class="container">
      ${sectionHead(a.kicker, a.title).replace('class="section__title"', 'class="section__title" id="about-title"')}
      <div class="about">
        <div class="about__body reveal">
          ${a.body.map((p) => `<p>${esc(p)}</p>`).join('')}
        </div>
        <div class="about__side">
          <figure class="term reveal" aria-label="Animated example of an ML deployment pipeline">
            <div class="term__bar">
              <span class="term__dots" aria-hidden="true"><i></i><i></i><i></i></span>
              <span class="term__title">${esc(h.terminalTitle)}</span>
            </div>
            <ol class="stages" id="stages">
              ${h.stages.map((s) => `<li>${esc(s)}</li>`).join('')}
            </ol>
            <pre class="term__body" id="term-body" aria-hidden="true"></pre>
          </figure>
          <dl class="facts reveal">
            ${a.facts.map((f) => `<div class="fact"><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`).join('')}
          </dl>
        </div>
      </div>
    </div>
  </section>`;
}

function skillsTpl(t) {
  const s = t.skills;
  return `
  <section class="section" id="skills" aria-label="${esc(s.kicker)}">
    <div class="container">
      ${sectionHead(s.kicker, s.title)}
      <div class="bento">
        ${s.items.map((k) => `
          <article class="card skill reveal ${k.wide ? 'skill--wide' : ''}">
            <span class="card__icon">${icon(k.icon)}</span>
            <h3 class="card__title">${esc(k.title)}</h3>
            <p class="card__text">${esc(k.text)}</p>
            ${tags(k.tags)}
          </article>`).join('')}
      </div>
    </div>
  </section>`;
}

function projectsTpl(t) {
  const p = t.projects;
  const featured = p.items.filter((x) => x.featured);
  const rest = p.items.filter((x) => !x.featured);
  let n = 0;
  const num = () => `P—${String(++n).padStart(2, '0')}`;

  // Live demo link (if any) + code link, or a "walkthrough on request" mailto.
  const linkHtml = (x) => {
    const out = [];
    if (x.live) out.push(`<a class="link" href="${x.live}" target="_blank" rel="noopener noreferrer">${esc(p.liveLabel)} ${icon('arrow')}</a>`);
    if (x.repo) out.push(`<a class="link" href="${x.repo}" target="_blank" rel="noopener noreferrer">${esc(p.repoLabel)} ${icon('arrow')}</a>`);
    if (!out.length) out.push(`<a class="link link--muted" href="mailto:${links.email}?subject=${encodeURIComponent(x.title)}">${esc(p.noRepoLabel)} ${icon('mail')}</a>`);
    return `<span class="links">${out.join('')}</span>`;
  };

  const metrics = (list) => `
    <dl class="metrics">
      ${list.map((m) => `<div class="metric"><dt>${esc(m.value)}</dt><dd>${esc(m.label)}</dd></div>`).join('')}
    </dl>`;

  return `
  <section class="section" id="projects" aria-label="${esc(p.kicker)}">
    <div class="container">
      ${sectionHead(p.kicker, p.title, p.intro)}

      <div class="projects">
        ${featured.map((x) => `
          <article class="card project reveal">
            <div class="project__top">
              <span class="project__num">${num()}</span>
              <span class="pill">${esc(x.status)}</span>
            </div>
            <h3 class="project__title">${esc(x.title)}</h3>
            <p class="project__role">${esc(x.role)}</p>
            <p class="card__text">${esc(x.summary)}</p>
            ${metrics(x.metrics)}
            ${x.note ? `<p class="project__note">${esc(x.note)}</p>` : ''}
            <div class="project__foot">
              ${tags(x.tags)}
              ${linkHtml(x)}
            </div>
          </article>`).join('')}
      </div>

      <div class="projects projects--compact">
        ${rest.map((x) => `
          <article class="card project project--compact reveal">
            <div class="project__top">
              <span class="project__num">${num()}</span>
              <span class="pill pill--quiet">${esc(x.status)}</span>
            </div>
            <h3 class="project__title">${esc(x.title)}</h3>
            <p class="project__role">${esc(x.role)}</p>
            <p class="card__text">${esc(x.summary)}</p>
            ${metrics(x.metrics)}
            <div class="project__foot">
              ${tags(x.tags)}
              ${linkHtml(x)}
            </div>
          </article>`).join('')}
      </div>

      <p class="more reveal">
        <a class="btn btn--ghost" href="${links.github}" target="_blank" rel="noopener noreferrer">${esc(p.moreLabel)} ${icon('arrow')}</a>
      </p>
    </div>
  </section>`;
}

function journeyTpl(t) {
  const j = t.journey;
  const c = t.certs;
  return `
  <section class="section" id="journey" aria-label="${esc(j.kicker)}">
    <div class="container">
      ${sectionHead(j.kicker, j.title)}
      <ol class="timeline">
        ${j.items.map((x) => `
          <li class="tl reveal">
            <span class="tl__dot" aria-hidden="true"></span>
            <p class="tl__period">${esc(x.period)}</p>
            <div class="tl__body">
              <h3 class="tl__role">${esc(x.role)}</h3>
              <p class="tl__org">${esc(x.org)} · <span>${esc(x.place)}</span></p>
              ${x.points.length ? `<ul class="tl__points">${x.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>` : ''}
            </div>
          </li>`).join('')}
      </ol>

      <div class="certs-wrap">
        ${sectionHead(c.kicker, c.title)}
        <ul class="certs">
          ${c.items.map((x) => `
            <li class="card cert reveal">
              <span class="card__icon">${icon('award')}</span>
              <div>
                <p class="cert__name">${esc(x.name)}</p>
                <p class="cert__level">${esc(x.level)}</p>
              </div>
              ${x.verify ? `<a class="link" href="${x.verify}" target="_blank" rel="noopener noreferrer">${esc(c.verifyLabel)} ${icon('arrow')}</a>` : ''}
            </li>`).join('')}
        </ul>
      </div>
    </div>
  </section>`;
}

function contactTpl(t) {
  const c = t.contact;
  return `
  <section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="container">
      <div class="contact__card reveal">
        <p class="kicker">${esc(c.kicker)}</p>
        <h2 class="contact__title" id="contact-title">${esc(c.title)}</h2>
        <p class="contact__text">${esc(c.text)}</p>

        <div class="contact__email">
          <a class="contact__addr" href="mailto:${links.email}">${esc(links.email)}</a>
          <button type="button" class="btn btn--ghost btn--sm" id="copy-email" data-label="${esc(c.copy)}" data-done="${esc(c.copied)}">
            ${icon('copy')} <span>${esc(c.copy)}</span>
          </button>
        </div>

        <ul class="socials">
          ${links.phone ? `<li><a href="tel:${links.phone.replace(/\s/g, '')}" aria-label="${esc(c.phoneLabel)} ${esc(links.phone)}">${icon('phone')} ${esc(links.phone)}</a></li>` : ''}
          <li><a href="${links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ${icon('arrow')}</a></li>
          <li><a href="${links.github}" target="_blank" rel="noopener noreferrer">GitHub ${icon('arrow')}</a></li>
          <li><a href="${links.cv}" download>CV (PDF) ${icon('down')}</a></li>
        </ul>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer__inner">
      <p>© ${new Date().getFullYear()} Faiz Hussain</p>
      <p>${esc(t.footer)}</p>
    </div>
  </footer>`;
}

/* ---------- render ---------- */

function render() {
  const t = content[lang];

  document.documentElement.lang = lang;
  document.title = t.meta.title;
  $('meta[name="description"]')?.setAttribute('content', t.meta.description);

  // Nav links (desktop + mobile share the same data)
  const navHtml = t.nav.map((n) => `<a href="#${n.id}" data-nav="${n.id}">${esc(n.label)}</a>`).join('');
  $('#nav-links').innerHTML = navHtml;
  $('#mobile-menu').innerHTML = `<nav aria-label="Mobile">${navHtml}</nav>`;

  // Language buttons
  $$('.seg__btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));

  $('#app').innerHTML = heroTpl(t) + aboutTpl(t) + skillsTpl(t) + projectsTpl(t) + journeyTpl(t) + contactTpl(t);

  updateThemeButton();
  setupReveal();
  setupActiveNav();
  setupSpotlight();
  setupCopy();
  runTerminal(t.hero);
}

/* ---------- language ---------- */

$$('.seg__btn').forEach((btn) =>
  btn.addEventListener('click', () => {
    if (btn.dataset.lang === lang) return;
    lang = btn.dataset.lang;
    store.set('lang', lang);
    const y = window.scrollY;
    render();
    window.scrollTo(0, y); // keep the reader where they were
  }),
);

/* ---------- theme ---------- */

function updateThemeButton() {
  const dark = document.documentElement.dataset.theme !== 'light';
  const btn = $('#theme-toggle');
  btn.innerHTML = icon(dark ? 'sun' : 'moon');
  btn.setAttribute('aria-label', dark ? content[lang].a11y.toLight : content[lang].a11y.toDark);
  $('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0b0d' : '#f6f5f1');
}

$('#theme-toggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  store.set('theme', next);
  updateThemeButton();
});

/* ---------- header + mobile menu ---------- */

const nav = $('#nav');
const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const menuBtn = $('#menu-toggle');
const menu = $('#mobile-menu');

function setMenu(open) {
  menu.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? content[lang].a11y.menuClose : content[lang].a11y.menuOpen);
  nav.classList.toggle('nav--open', open);
}
menuBtn.addEventListener('click', () => setMenu(menu.hidden));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

/* ---------- scroll reveal ---------- */

let revealObs;
function setupReveal() {
  revealObs?.disconnect();
  const els = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  revealObs = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); revealObs.unobserve(en.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  // Stagger siblings slightly so grids cascade in.
  els.forEach((el) => {
    const i = [...el.parentElement.children].indexOf(el);
    el.style.setProperty('--d', `${Math.min(i, 6) * 60}ms`);
    revealObs.observe(el);
  });
}

/* ---------- active section in nav ---------- */

let navObs;
function setupActiveNav() {
  navObs?.disconnect();
  if (!('IntersectionObserver' in window)) return;
  navObs = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      $$('[data-nav]').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === en.target.id));
    }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  content[lang].nav.forEach((n) => { const s = document.getElementById(n.id); if (s) navObs.observe(s); });
}

/* ---------- card spotlight (follows the pointer) ---------- */

function setupSpotlight() {
  if (reduceMotion || !window.matchMedia('(hover: hover)').matches) return;
  $$('.card').forEach((card) =>
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }),
  );
}

/* ---------- copy email ---------- */

function setupCopy() {
  const btn = $('#copy-email');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(links.email);
    } catch {
      // Fallback for older browsers / insecure contexts
      const ta = Object.assign(document.createElement('textarea'), { value: links.email });
      document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    btn.innerHTML = `${icon('check')} <span>${esc(btn.dataset.done)}</span>`;
    setTimeout(() => { btn.innerHTML = `${icon('copy')} <span>${esc(btn.dataset.label)}</span>`; }, 1800);
  });
}

/* ---------- hero terminal animation ----------
 * Types the log line by line and lights up the matching pipeline stage.
 * A generation counter cancels the old loop when the language changes.
 */

// Which pipeline stage each log line belongs to (infra, train, eval, deploy, monitor).
const STAGE_FOR_LINE = [0, 0, 1, 1, 2, 2, 3, 3, 4];
let termGen = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function runTerminal(hero) {
  const gen = ++termGen;
  const body = $('#term-body');
  const stages = $$('#stages li');
  if (!body) return;

  const lineHtml = (txt) => {
    const isCmd = txt.startsWith('$');
    const cls = isCmd ? 'cmd' : /✓|healthy|none|complete|PASS|watching/.test(txt) ? 'ok' : 'out';
    return `<span class="ln ${cls}">${esc(txt)}</span>`;
  };

  const setStage = (i) =>
    stages.forEach((li, k) => {
      li.classList.toggle('is-done', k < i);
      li.classList.toggle('is-active', k === i);
    });

  if (reduceMotion) {
    body.innerHTML = hero.log.map(lineHtml).join('\n');
    stages.forEach((li) => li.classList.add('is-done'));
    return;
  }

  while (gen === termGen) {
    body.innerHTML = '';
    setStage(-1);
    for (let i = 0; i < hero.log.length; i++) {
      if (gen !== termGen) return;
      const txt = hero.log[i];
      setStage(STAGE_FOR_LINE[i] ?? 4);
      if (txt.startsWith('$')) {
        // type commands character by character
        const span = document.createElement('span');
        span.className = 'ln cmd typing';
        body.append(span);
        for (let c = 1; c <= txt.length; c++) {
          if (gen !== termGen) return;
          span.textContent = txt.slice(0, c);
          await sleep(18 + Math.random() * 24);
        }
        span.classList.remove('typing');
        await sleep(260);
      } else {
        body.insertAdjacentHTML('beforeend', lineHtml(txt));
        await sleep(420);
      }
      body.append('\n');
    }
    stages.forEach((li) => { li.classList.remove('is-active'); li.classList.add('is-done'); });
    await sleep(3800);
  }
}

/* ---------- go ---------- */

render();

// If the page was opened with a #hash, jump there after content exists.
if (location.hash) {
  const target = document.getElementById(location.hash.slice(1));
  target?.scrollIntoView();
}
