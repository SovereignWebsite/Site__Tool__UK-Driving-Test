// The /designs/ hub and the review log. The review text is data in docs/build/reviews.mjs.
import { REVIEWS, RECOMMENDATION } from './reviews.mjs';

const shellFor = ({ head, footer, family, esc, SITE_TITLE, pickerHtml }, { title, h1, desc, path, body }) => `${head({ title: `${title} | ${SITE_TITLE}`, desc, path, d: { css: '/assets/designs/hub.css' } })}<body class="d-hub">
<a class="skip" href="#main">Skip to content</a>
${family}
<aside class="unofficial" aria-label="Notice"><strong>Unofficial</strong><span class="long">. Not affiliated with, or endorsed by, the DVSA or GOV.UK.</span><span class="short">: not the DVSA or GOV.UK</span></aside>
${pickerHtml({ id: 'hub', full: false })}
<header class="top"><a class="name" href="/">${SITE_TITLE}</a><nav class="own" aria-label="Designs"><a href="/designs/">Design directions</a><a href="/designs/reviews/">Review log</a></nav></header>
<main id="main"><h1>${esc(h1)}</h1>
${body}
</main>
${footer}
</body>
</html>
`;

export function designsHub(a) {
  const { DESIGNS, LIVE, esc } = a;
  const cards = DESIGNS.map((d) => `<li class="dcard" id="${d.id}"><div class="thumb t-${d.id}" aria-hidden="true"><i></i><i></i><i></i><i></i></div><h2>${esc(d.name)}${d.id === LIVE ? ' <span class="live">live now</span>' : ''}${d.id === RECOMMENDATION.id ? ' <span class="rec">recommended</span>' : ''}</h2>
<p>${esc(d.tagline)}</p><p><strong>Best for:</strong> ${esc(d.best_for)}</p>
<p class="links"><a href="/designs/${d.id}/">Home page</a> <a href="/designs/${d.id}/topic/">A topic page</a> <a href="/designs/${d.id}/quiz/">A quiz</a></p></li>`).join('');
  const body = `<p class="lede"><strong>Choose a design.</strong> Five structural design directions for this site. They differ in layout and navigation, not only in colour. The live site uses one of them (${esc(DESIGNS.find((d) => d.id === LIVE).name)}) until the owner picks. Each demonstration has a home page, a Highway Code topic page and a working quiz, using the same content.</p>
<ul class="dcards">${cards}</ul>
<section aria-labelledby="rec"><h2 id="rec">Recommendation</h2>
<p><strong>${esc(DESIGNS.find((d) => d.id === RECOMMENDATION.id).name)}.</strong> ${esc(RECOMMENDATION.why)}</p>
<p>The choice is the owner&rsquo;s. See the <a href="/designs/reviews/">review log</a> for what was checked in each round and what changed.</p></section>`;
  return shellFor(a, { title: 'Design directions', h1: 'Design directions', desc: 'Five design directions for the UK driving theory test site, with a recommendation. The owner picks.', path: '/designs/', body });
}

export function reviewsPage(a) {
  const { esc } = a;
  const body = `<p class="lede">What was checked in each round of design review, who did it, what was found and what changed. Rounds are added as they happen.</p>
${REVIEWS.map((r) => `<section class="round" aria-labelledby="${r.id}"><h2 id="${r.id}">${esc(r.title)}</h2>
<p><strong>Reviewer:</strong> ${esc(r.who)}. <strong>Date:</strong> ${esc(r.date)}. <strong>Status:</strong> ${esc(r.status)}.</p>
${r.findings.length ? `<h3>Findings</h3><ul>${r.findings.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}
${r.changes.length ? `<h3>Changes made</h3><ul>${r.changes.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}</section>`).join('')}`;
  return shellFor(a, { title: 'Design review log', h1: 'Design review log', desc: 'The design review rounds for the UK driving theory test site: who reviewed, what was found, what changed.', path: '/designs/reviews/', body });
}
