// Generates the site's content pages and the design directions into site/.
//   node docs/build/build.mjs        (run from the repository root; commit the output with the source)
// Live pages use one design (LIVE). The five designs are demonstrated at /designs/<id>/ until the owner picks one.
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { READ, SITE, OGL, TEST, TOPICS, QUIZ, ruleUrl, ruleLabel, HC, GOV } from './content.mjs';
import { DESIGNS, LIVE } from './designs.mjs';

const family = readFileSync('docs/build/family.html', 'utf8');
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const out = (path, html) => { const f = join('site', path, 'index.html'); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, html); };

const UNOFFICIAL = 'Unofficial site. Not affiliated with, or endorsed by, the DVSA or GOV.UK.';
const quizTopics = [...TOPICS.map((t) => ({ slug: t.slug, title: t.title })), { slug: 'hazard', title: 'Hazard awareness' }];
const quizCount = (slug) => QUIZ[slug].length;

// ---------- page bodies (shared by every design) ----------
const ext = (href, text) => `<a href="${href}">${text}</a>`;
const src = (href, label) => `<p class="source">Source: ${ext(href, esc(label))}, read on ${READ}.</p>`;

const bodyTest = () => `
<p class="lede">The theory test is the first of the two tests you pass before you hold a full car licence. It has two parts, taken as one test. Everything on this page is taken from GOV.UK&rsquo;s pages on the car theory test, read on ${READ}. GOV.UK is the authority: check it before you book.</p>
<section aria-labelledby="two-parts"><h2 id="two-parts">Two parts, one test</h2>
<p>You must have a provisional driving licence to book. The test has multiple-choice questions and a hazard perception test (a video test about spotting hazards on the road). You book and take them as a single test, and you must pass both parts to pass.</p>
${src(TEST.parts.book, 'GOV.UK, Theory test: booking your test')}</section>
<section aria-labelledby="age"><h2 id="age">When you can take it</h2>
<p>You can take the theory test from your 17th birthday. You can take it from your 16th birthday if you get, or have applied for, the higher weekly rate of the mobility part of Personal Independence Payment (PIP).</p>
<p>You usually need to pass it before you can get your full car driving licence. GOV.UK lists a few people who do not need the car theory test, for example someone upgrading an automatic car licence to a manual one.</p>
${src(TEST.parts.book, 'GOV.UK, Theory test: booking your test')}</section>
<section aria-labelledby="mcq"><h2 id="mcq">Part one: multiple-choice questions</h2>
<ul>
<li>You have 57 minutes to answer 50 multiple-choice questions.</li>
<li>A question and several possible answers appear on screen, and you choose the right one.</li>
<li>Three of the questions are about a short, silent video of a normal driving situation. You can watch it as many times as you like.</li>
<li>You can flag questions to come back to, and you can go back and change any answer at any point.</li>
<li>You do not have to use the full 57 minutes. You can have a break of up to 3 minutes before the hazard perception part starts.</li>
</ul>
${src(TEST.parts.mcq, 'GOV.UK, Theory test: multiple-choice questions')}</section>
<section aria-labelledby="hp"><h2 id="hp">Part two: hazard perception</h2>
<p>You watch 14 video clips of everyday road scenes. Each has at least one developing hazard, and one clip has two. You score up to 5 points for each developing hazard, so the part is worth up to 75 points. You only get one attempt at each clip. Read more on the <a href="/hazard-perception/">hazard perception page</a>.</p>
${src(TEST.parts.hazard, 'GOV.UK, Theory test: hazard perception test')}</section>
<section aria-labelledby="pass"><h2 id="pass">Pass marks and results</h2>
<table class="data"><caption>Pass marks, as published by GOV.UK</caption><thead><tr><th scope="col">Part</th><th scope="col">Pass mark</th><th scope="col">Points available</th></tr></thead>
<tbody><tr><th scope="row">Multiple-choice questions</th><td>43</td><td>50</td></tr><tr><th scope="row">Hazard perception</th><td>44</td><td>75</td></tr></tbody></table>
<p>You get the result at the test centre. If you pass, you get a letter with a pass certificate number, which you need to book and take your driving test. The number lasts for 2 years, and you must pass your driving test in that time or pass the theory test again.</p>
<p>If you fail, the letter tells you which parts you did not score enough on. You must take the full test again, even if you passed one part, and wait at least 3 working days.</p>
${src(TEST.parts.pass, 'GOV.UK, Theory test: pass mark and test result')}</section>
<section aria-labelledby="day"><h2 id="day">On the day</h2>
<ul>
<li>Take your UK photocard driving licence. If you have a paper licence, bring a valid passport as well. Your test is cancelled, and you do not get your money back, if you do not take the right things.</li>
<li>Arrive 15 minutes before your test starts. If you are late, the test is cancelled and you lose your money.</li>
<li>Turn off all electronic devices before you enter, including phones, smart watches and fitness trackers. You store personal belongings in a locker, or a clear plastic box if there are no lockers.</li>
<li>You pass identity and security checks first. Staff need to see your face to check it against your photo ID.</li>
</ul>
${src(TEST.parts.take, 'GOV.UK, Theory test: what to take')} ${src(TEST.parts.arrive, 'GOV.UK, Theory test: when you arrive')}</section>
<section aria-labelledby="help"><h2 id="help">If you need support</h2>
<p>When you book, say if you have a reading difficulty, disability or health condition. GOV.UK describes options such as hearing the test through headphones, extra time, and taking the test in British Sign Language. Read the full details on GOV.UK, because some options need proof or notice.</p>
${src(TEST.parts.support, 'GOV.UK, Theory test: reading difficulty, disability or health condition')}</section>
<section aria-labelledby="book"><h2 id="book">Booking, fees and official practice</h2>
<p>This site does not quote the test fee or booking rules, because they can change. Use GOV.UK: ${ext(TEST.book, 'Book your theory test')}. GOV.UK also offers a ${ext(TEST.practice, 'free practice theory test')} and lists official books and apps in its ${ext(TEST.parts.revision, 'revision and practice page')}.</p>
<p>GOV.UK says the multiple-choice questions are based on three books: The Highway Code, Know your traffic signs, and Driving: the essential skills. This site covers The Highway Code only, for now.</p>
${src(TEST.parts.revision, 'GOV.UK, Theory test: revision and practice')}</section>`;

const bodyHCIndex = () => `
<p class="lede">The Highway Code, grouped into ten topics. Each topic gives a short summary in our own words, and links every rule to the full text on GOV.UK, which is the authority. Read the rules themselves as well as our summaries.</p>
<ol class="cards">${TOPICS.map((t, i) => `<li><a class="card" href="/highway-code/${t.slug}/"><span class="n">${i + 1}</span><span class="t">${esc(t.title)}</span><span class="b">${esc(t.blurb)}</span></a></li>`).join('')}</ol>
<p class="source">The Highway Code is Crown copyright and is used under the ${ext(OGL, 'Open Government Licence v3.0')}. Full text: ${ext(HC, 'GOV.UK, The Highway Code')}, read on ${READ}.</p>`;

const bodyTopic = (t, practiseHref) => `
<p class="lede">${esc(t.intro)}</p>
<ul class="rules">${t.rules.map(([n, g]) => `<li id="r${String(n).toLowerCase()}"><a class="rn" href="${ruleUrl(n)}">${ruleLabel(n)}</a><span class="g">${esc(g)}</span></li>`).join('')}</ul>
<p class="cta"><a class="btn" href="${practiseHref}">Practise this topic (${quizCount(t.slug)} questions)</a></p>
<p class="source">Summaries are written by this site and are not the wording of the Code. Rules are linked to the official text on ${ext(HC, 'GOV.UK')}, read on ${READ}. The Highway Code is Crown copyright, used under the ${ext(OGL, 'Open Government Licence v3.0')}.</p>`;

const bodyQuiz = (slug) => {
  const qs = QUIZ[slug]; const n = qs.length;
  const items = qs.map((q, i) => `<li class="q" data-answer="${q.a}"><fieldset><legend><span class="qn">Question ${i + 1} of ${n}</span> ${esc(q.q)}</legend>
${q.o.map((o, j) => `<label class="opt"><input type="radio" name="q${i}" value="${j}"> <span>${esc(o)}</span></label>`).join('\n')}
</fieldset>
<div class="why"><p class="verdict"><strong class="vtext"></strong> The answer is: <em>${esc(q.o[q.a])}</em></p><p>${esc(q.w)}</p><p class="cite">Highway Code: ${q.r.map((r) => `<a href="${ruleUrl(r)}">${ruleLabel(r)}</a>`).join(', ')}${q.gov ? `. Also ${ext(TEST.parts[q.gov[0]], esc(q.gov[1]))}, read on ${READ}` : ''}</p></div></li>`).join('\n');
  return `<p class="lede">${n} practice questions written by this site, not official DVSA questions. Choose one answer for each, then check. Each explanation names the Highway Code rule it comes from. Your result is saved only in this browser, if you allow it.</p>
<form class="quiz" data-quiz="${slug}" data-total="${n}"><ol class="qlist">${items}</ol>
<div class="actions"><button type="submit" class="btn">Check my answers</button> <button type="reset" class="btn alt">Start again</button></div>
<p class="result" role="status" aria-live="polite" tabindex="-1"></p></form>
<noscript><p class="note">Without JavaScript the answers and explanations show under each question, so you can still practise on paper.</p></noscript>
<p class="source">These questions and explanations are written by this site. They are not official questions and are not copied from, or based on, the DVSA&rsquo;s revision question bank. Rules cited are from ${ext(HC, 'The Highway Code')} on GOV.UK, read on ${READ}, Crown copyright, under the ${ext(OGL, 'Open Government Licence v3.0')}.</p>`;
};

const bodyPracticeIndex = (hrefFor) => `
<p class="lede">Practice quizzes by topic. Every question is written by this site from a Highway Code rule and cites it. They are not official questions, and doing well here does not predict a result on the real test. For official practice, GOV.UK offers a ${ext(TEST.practice, 'free practice theory test')}.</p>
<ol class="cards">${quizTopics.map((t, i) => `<li><a class="card" href="${hrefFor(t.slug)}"><span class="n">${i + 1}</span><span class="t">${esc(t.title)}</span><span class="b">${quizCount(t.slug)} questions <span class="best" data-best="${t.slug}"></span></span></a></li>`).join('')}</ol>
<section class="privacy" aria-labelledby="priv"><h2 id="priv">Your results stay with you</h2>
<p>When you check a quiz, this site can remember your best score for that topic. It is saved only in your own browser (local storage) on this device. Nothing is sent anywhere, and there are no accounts and no tracking.</p>
<p><button type="button" class="btn alt" data-clear>Clear my saved results</button> <span class="cleared" role="status" aria-live="polite"></span></p></section>`;

const HAZARD_LOOK = [
  ['Parked cars and gaps between them', 'Children, doors opening and drivers pulling out are all possible. Take care passing parked vehicles, especially where children may be near.', [206]],
  ['Cyclists, motorcyclists and horse riders', 'They are hard to see at junctions and roundabouts, and may need to move around drains or wet patches. A rider looking over a shoulder may be about to pull out.', [211, 212, 213]],
  ['Pedestrians near schools, shops and bus stops', 'People may step out suddenly, children especially. Buses pulling away deserve priority when it is safe.', [205, 206, 208, 223]],
  ['Bends and hidden junctions on country roads', 'Bends can be sharper than they look, and junctions partly hidden. Slow farm vehicles, riders and mud are all possible.', [154]],
  ['Large vehicles', 'They need more room to turn and block your view. Hang back to see more.', [221, 222]],
  ['Emergency vehicles and sudden changes ahead', 'Flashing lights ahead can mean an incident. Slow down and be ready to move.', [219, 281]],
];
const bodyHazard = (practiseHref) => `
<p class="lede">Hazard perception is the second part of the theory test. This page explains how GOV.UK describes it, then gives learning ideas drawn from the Highway Code. It does not include practice clips: for official video practice, GOV.UK points to the DVSA&rsquo;s own products.</p>
<section aria-labelledby="how"><h2 id="how">How it works (from GOV.UK)</h2>
<ul>
<li>Before you start, you are shown a video about how the test works. Then you watch 14 video clips of everyday road scenes.</li>
<li>Each clip has at least one &lsquo;developing hazard&rsquo;, and one clip has two.</li>
<li>A developing hazard is something that would cause you to take action, like changing speed or direction.</li>
<li>You score up to 5 points per developing hazard, for clicking as soon as it starts to develop. You do not lose points for a wrong click, but you score nothing if you click continuously or in a pattern.</li>
<li>You get one attempt at each clip and cannot review or change your responses.</li>
<li>The pass mark is 44 out of 75. You must pass this and the multiple-choice part to pass the theory test.</li>
</ul>
${src(TEST.parts.hazard, 'GOV.UK, Theory test: hazard perception test')} ${src(TEST.parts.pass, 'GOV.UK, Theory test: pass mark and test result')}</section>
<section aria-labelledby="ex"><h2 id="ex">GOV.UK&rsquo;s example</h2>
<p>A car is parked at the side of the road and is not doing anything. It would not cause you to take action, so it is not a developing hazard. As you get closer, its right-hand indicator starts to flash and it begins to move away. You would need to slow down, so it is now a developing hazard.</p>
<p>The lesson: a potential hazard becomes a developing hazard when it changes in a way that would make you act. Scan for things that might change, and watch them.</p></section>
<section aria-labelledby="look"><h2 id="look">What to look out for</h2>
<p>These are this site&rsquo;s own pointers, each tied to Highway Code rules. They are a way of thinking, not a list of what appears in the test.</p>
<dl class="look">${HAZARD_LOOK.map(([h, t, rs]) => `<dt>${esc(h)}</dt><dd>${esc(t)} <span class="cite">${rs.map((r) => `<a href="${ruleUrl(r)}">${ruleLabel(r)}</a>`).join(', ')}</span></dd>`).join('')}</dl></section>
<p class="cta"><a class="btn" href="${practiseHref}">Try the hazard awareness questions (${quizCount('hazard')})</a></p>
<p class="source">Official hazard perception practice: see GOV.UK&rsquo;s ${ext(TEST.parts.revision, 'revision and practice page')}, read on ${READ}. Highway Code rules are Crown copyright, used under the ${ext(OGL, 'Open Government Licence v3.0')}.</p>`;

const bodySources = () => `
<p class="lede">Where everything on this site comes from, and what this site is not.</p>
<section aria-labelledby="unoff"><h2 id="unoff">This site is unofficial</h2>
<p>This site is not affiliated with, endorsed by or connected to the DVSA (Driver and Vehicle Standards Agency) or GOV.UK. It carries no DVSA or GOV.UK branding. It is a free learning aid. For anything that matters, such as booking or fees, use ${ext(GOV, 'GOV.UK')}.</p></section>
<section aria-labelledby="from"><h2 id="from">What comes from where</h2>
<ul>
<li><strong>How the theory test works:</strong> GOV.UK&rsquo;s ${ext(TEST.hub, 'Theory test: cars')} pages. Each fact has its page linked and the date it was read: ${READ}.</li>
<li><strong>The Highway Code summaries:</strong> written by this site in its own words from ${ext(HC, 'The Highway Code')}, with each rule linked to the official text.</li>
<li><strong>Practice questions and explanations:</strong> written by this site from the Highway Code rules each cites. They are not official questions.</li>
</ul></section>
<section aria-labelledby="ogl"><h2 id="ogl">Licence and credit</h2>
<p>The Highway Code is Crown copyright. It is used here under the ${ext(OGL, 'Open Government Licence v3.0')}. Contains public sector information licensed under the Open Government Licence v3.0.</p>
<p>The DVSA&rsquo;s official theory test revision question bank is separately licensed. This site has not copied it, and no question here is taken from it or modelled on its wording.</p></section>
<section aria-labelledby="priv2"><h2 id="priv2">Privacy</h2>
<p>This site uses no cookies, no analytics, no tracking and no third-party scripts. If you check a quiz, your best score for that topic can be kept in your own browser&rsquo;s local storage. You can clear it with the button on the <a href="/practice/">practice page</a>.</p></section>
<section aria-labelledby="miss"><h2 id="miss">Found a mistake?</h2>
<p>Rules change. If something here disagrees with GOV.UK, GOV.UK is right. The source is in the <a href="https://github.com/SovereignWebsite/Site__Tool__UK-Driving-Test">public repository</a>.</p>
<p>Not covered yet: the practical driving test, booking steps, and traffic signs.</p></section>`;

// ---------- the page set, for one design ----------
// ctx: { id, base ('' for live, '/designs/<id>' for a demo), href(key,arg) }
export const NAV = [
  ['home', 'Home'], ['test', 'How the test works'], ['hc', 'Highway Code'], ['practice', 'Practice quizzes'], ['hazard', 'Hazard perception'], ['sources', 'Sources and licence'],
];
const livePath = { home: '/', test: '/theory-test/', hc: '/highway-code/', practice: '/practice/', hazard: '/hazard-perception/', sources: '/sources/' };

const head = ({ title, desc, path, d }) => `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="UK driving theory test: learn and practise">
<meta property="og:locale" content="en_GB">
<meta property="og:url" content="${SITE}${path}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/share/card-1200x630.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="UK driving theory test: learn and practise">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE}/assets/share/card-1200x630.jpg">
<link rel="canonical" href="${SITE}${path}">
<link rel="stylesheet" href="/assets/family.css">
<link rel="stylesheet" href="/assets/base.css">
<link rel="stylesheet" href="${d.css}">
<script src="/assets/quiz.js" defer></script>
</head>
`;

const footer = (extra = '') => `<footer class="foot">
<p class="unofficial-foot">${UNOFFICIAL} The practice questions are written by this site, not official questions.</p>
<p>Contains public sector information licensed under the ${ext(OGL, 'Open Government Licence v3.0')}. The Highway Code is Crown copyright. Test facts from ${ext(TEST.hub, 'GOV.UK')}, read on ${READ}.</p>
<p>No cookies, no tracking. <a href="/sources/">Sources and licence</a> &middot; <a href="/designs/">Design directions</a> &middot; <a href="/start/">Start here</a> &middot; <a href="/agents/">Use with your AI</a> &middot; <a href="/admin/">How this site was made</a> &middot; <a href="/policy/">How this site is governed</a></p>
<p>A sovereign website, made with the <a href="https://sovereignwebsite.org/">open pattern</a>. Source: <a href="https://github.com/SovereignWebsite/Site__Tool__UK-Driving-Test">github.com/SovereignWebsite/Site__Tool__UK-Driving-Test</a>.${extra}</p>
</footer>`;

// A page in a design: the design supplies shell(ctx) which wraps the body.
export function page(d, ctx, { key, title, h1, desc, path, body, crumbs = [] }) {
  const unofficial = `<aside class="unofficial" aria-label="Notice"><strong>Unofficial</strong><span class="long">. Not affiliated with, or endorsed by, the DVSA or GOV.UK.</span><span class="short">: not the DVSA or GOV.UK</span></aside>`;
  const main = d.shell({ ctx, key, h1, body, crumbs, unofficial, family, footer: footer(), NAV, esc });
  return head({ title, desc, path, d }) + main + '\n</html>\n';
}

const SITE_TITLE = 'UK driving theory test: learn and practise';
const T = (s) => `${s} | ${SITE_TITLE}`;

// The home page body differs by design: d.home(ctx, data) returns it.
function homeData(ctx) {
  return {
    topics: TOPICS, quizTopics, quizCount,
    hrefs: { test: ctx.href('test'), hc: ctx.href('hc'), practice: ctx.href('practice'), hazard: ctx.href('hazard'), sources: ctx.href('sources') },
    firstTopic: ctx.href('topic', TOPICS[0].slug), firstQuiz: ctx.href('quiz', TOPICS[0].slug),
    esc,
  };
}

function build(d, base, full) {
  const href = (key, arg) => {
    if (!full) {
      // a demo: its home, one topic and one quiz are its own pages, the rest link to the live pages
      if (key === 'home') return `${base}/`;
      if (key === 'hc') return `${base}/topic/`;
      if (key === 'topic') return arg === DEMO_TOPIC ? `${base}/topic/` : `/highway-code/${arg}/`;
      if (key === 'practice') return `${base}/quiz/`;
      if (key === 'quiz') return arg === DEMO_TOPIC ? `${base}/quiz/` : `/practice/${arg}/`;
      return livePath[key];
    }
    if (key === 'topic') return `/highway-code/${arg}/`;
    if (key === 'quiz') return `/practice/${arg}/`;
    return livePath[key];
  };
  const ctx = { id: d.id, base, full, href };
  const P = (p) => page(d, ctx, p);
  const w = (rel, html) => out(join(full ? '' : base.replace(/^\//, ''), rel), html);

  const homeBody = d.home(ctx, homeData(ctx));
  const desc = 'Help for anyone learning for the UK driving theory test: how the test works, the Highway Code by topic, practice questions and hazard perception, linked to GOV.UK. Unofficial.';
  w('', P({ key: 'home', title: SITE_TITLE, h1: 'Get ready for the UK theory test', desc, path: full ? '/' : `${base}/`, body: homeBody }));

  if (full) {
    w('theory-test', P({ key: 'test', title: T('How the theory test works'), h1: 'How the theory test works', desc: 'How the UK car theory test works, from GOV.UK: two parts, 57 minutes for 50 questions, 14 hazard clips, pass marks and what to take. Unofficial.', path: '/theory-test/', body: bodyTest(), crumbs: [] }));
    w('highway-code', P({ key: 'hc', title: T('The Highway Code by topic'), h1: 'The Highway Code by topic', desc: 'The Highway Code summarised in ten topics, with each rule linked to the official text on GOV.UK. Unofficial.', path: '/highway-code/', body: bodyHCIndex() }));
    for (const t of TOPICS) w(`highway-code/${t.slug}`, P({ key: 'hc', title: T(t.title), h1: t.title, desc: `${t.blurb} Summarised from the Highway Code with rule links. Unofficial.`, path: `/highway-code/${t.slug}/`, body: bodyTopic(t, `/practice/${t.slug}/`), crumbs: [['Highway Code', '/highway-code/']] }));
    w('practice', P({ key: 'practice', title: T('Practice quizzes'), h1: 'Practice quizzes by topic', desc: 'Practice questions written by this site from the Highway Code, each citing its rule. Not official questions. Unofficial.', path: '/practice/', body: bodyPracticeIndex((s) => `/practice/${s}/`) }));
    for (const t of quizTopics) w(`practice/${t.slug}`, P({ key: 'practice', title: T(`Quiz: ${t.title}`), h1: `Quiz: ${t.title}`, desc: `Practice questions on ${t.title.toLowerCase()}, each citing the Highway Code rule. Written by this site, not official questions. Unofficial.`, path: `/practice/${t.slug}/`, body: bodyQuiz(t.slug), crumbs: [['Practice quizzes', '/practice/']] }));
    w('hazard-perception', P({ key: 'hazard', title: T('Hazard perception explained'), h1: 'Hazard perception explained', desc: 'How the hazard perception part of the UK theory test works, from GOV.UK, with learning pointers from the Highway Code. Unofficial.', path: '/hazard-perception/', body: bodyHazard('/practice/hazard/') }));
    w('sources', P({ key: 'sources', title: T('Sources and licence'), h1: 'Sources and licence', desc: 'Where this site gets its facts, the licence for the Highway Code, and what this unofficial site is not.', path: '/sources/', body: bodySources() }));
  } else {
    const t = TOPICS.find((x) => x.slug === DEMO_TOPIC);
    w('topic', P({ key: 'hc', title: T(`${t.title} (${d.name} design)`), h1: t.title, desc: `Design demonstration: ${d.name}.`, path: `${base}/topic/`, body: bodyTopic(t, href('quiz', DEMO_TOPIC)), crumbs: [['Highway Code', `${base}/topic/`]] }));
    w('quiz', P({ key: 'practice', title: T(`Quiz: ${t.title} (${d.name} design)`), h1: `Quiz: ${t.title}`, desc: `Design demonstration: ${d.name}.`, path: `${base}/quiz/`, body: bodyQuiz(DEMO_TOPIC), crumbs: [['Practice quizzes', `${base}/quiz/`]] }));
  }
}
const DEMO_TOPIC = 'junctions-roundabouts-and-crossings';

// ---------- the live site, then each design's demonstration ----------
const live = DESIGNS.find((d) => d.id === LIVE);
build(live, '', true);
for (const d of DESIGNS) build(d, `/designs/${d.id}`, false);

// ---------- the designs hub and the review log ----------
import { designsHub, reviewsPage } from './designs-pages.mjs';
out('designs', designsHub({ DESIGNS, LIVE, head, footer: footer(), family, esc, SITE_TITLE }));
out('designs/reviews', reviewsPage({ DESIGNS, LIVE, head, footer: footer(), family, esc, SITE_TITLE }));
console.log('built: live design', LIVE, '+', DESIGNS.length, 'demonstrations');
