// Five structural design directions. Each differs in layout and navigation, not only colour.
// A design is { id, name, tagline, best_for, css, shell(args) -> body html, home(ctx, data) -> html }.
export const LIVE = 'plain';

const navItems = (ctx, NAV, key, esc, cls = '') =>
  NAV.map(([k, label]) => `<a${cls ? ` class="${cls}"` : ''} href="${ctx.href(k)}"${k === key ? ' aria-current="page"' : ''}>${esc(label)}</a>`).join('');
const crumbHtml = (crumbs, esc) => (crumbs.length ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs.map(([t, h]) => `<a href="${h}">${esc(t)}</a>`).join(' &rsaquo; ')}</nav>` : '');
const SITE = 'UK driving theory test: learn and practise';

// 1. Plain page: one column, top navigation, text first. Closest to a well-made reference page.
const plain = {
  id: 'plain', name: 'Plain page', css: '/assets/designs/plain.css',
  tagline: 'One calm column and a top bar. Text first, nothing to learn.',
  best_for: 'Reading on any device, and the lowest maintenance.',
  shell: ({ ctx, key, h1, body, crumbs, unofficial, family, footer, NAV, esc }) => `<body class="d-plain">
<a class="skip" href="#main">Skip to content</a>
${family}${unofficial}
<header class="top"><a class="name" href="${ctx.href('home')}">${SITE}</a>
<nav class="own" aria-label="Main">${navItems(ctx, NAV.slice(1), key, esc)}</nav></header>
<main id="main">${crumbHtml(crumbs, esc)}<h1>${esc(h1)}</h1>
${body}
</main>
${footer}
</body>`,
  home: (ctx, d) => `<p class="lede">Free, plain help for learning for the UK car theory test. Learn how the test works, read the Highway Code by topic, practise with questions that cite the rules, and understand hazard perception. Nothing to sign up for, and nothing tracks you.</p>
<ol class="steps">
<li><a href="${d.hrefs.test}">How the theory test works</a><span> Two parts, the timings and pass marks, and what to take. From GOV.UK.</span></li>
<li><a href="${d.hrefs.hc}">The Highway Code by topic</a><span> Ten topics, summarised, with every rule linked to the official text.</span></li>
<li><a href="${d.hrefs.practice}">Practice quizzes</a><span> ${d.quizTopics.reduce((n, t) => n + d.quizCount(t.slug), 0)} questions in ${d.quizTopics.length} topics, each citing its rule.</span></li>
<li><a href="${d.hrefs.hazard}">Hazard perception explained</a><span> What a developing hazard is and how the clips are scored.</span></li>
</ol>
<p class="note">This site is unofficial. The practice questions are written by this site and are not official DVSA questions. Always check <a href="https://www.gov.uk/theory-test">GOV.UK</a> for the rules, booking and fees. <a href="${d.hrefs.sources}">Sources and licence</a>.</p>`,
};

// 2. Course path: a left-hand route of numbered steps, like a short course. Orients the learner by step.
const course = {
  id: 'course', name: 'Course path', css: '/assets/designs/course.css',
  tagline: 'A numbered route down the side. You always know the next step.',
  best_for: 'Learners who like to be told what to do next.',
  shell: ({ ctx, key, h1, body, crumbs, unofficial, family, footer, NAV, esc }) => `<body class="d-course">
<a class="skip" href="#main">Skip to content</a>
${family}${unofficial}
<div class="wrap">
<aside class="route"><a class="name" href="${ctx.href('home')}">${SITE}</a>
<nav aria-label="Your route"><ol>${NAV.slice(1).map(([k, label], i) => `<li><a href="${ctx.href(k)}"${k === key ? ' aria-current="page"' : ''}><span class="num" aria-hidden="true">${i + 1}</span><span>${esc(label)}</span></a></li>`).join('')}</ol></nav></aside>
<main id="main">${crumbHtml(crumbs, esc)}<h1>${esc(h1)}</h1>
${body}
${footer}
</main></div>
</body>`,
  home: (ctx, d) => `<p class="lede">Four steps to feel ready for the theory test. Work through them in order, or jump to what you need.</p>
<ol class="stepcards">
<li><span class="num" aria-hidden="true">1</span><div><h2><a href="${d.hrefs.test}">Know the test</a></h2><p>Two parts, one booking. See the timings, pass marks and what to take on the day.</p></div></li>
<li><span class="num" aria-hidden="true">2</span><div><h2><a href="${d.hrefs.hc}">Learn the rules</a></h2><p>The Highway Code in ten topics, each rule linked to the source.</p></div></li>
<li><span class="num" aria-hidden="true">3</span><div><h2><a href="${d.hrefs.practice}">Practise</a></h2><p>Short quizzes by topic. Every answer explains the rule behind it.</p></div></li>
<li><span class="num" aria-hidden="true">4</span><div><h2><a href="${d.hrefs.hazard}">Train your eyes</a></h2><p>What a developing hazard is, and how to scan for one.</p></div></li>
</ol>
<p class="note">Unofficial, and written by this site. Check <a href="https://www.gov.uk/theory-test">GOV.UK</a> for the rules, booking and fees. <a href="${d.hrefs.sources}">Sources and licence</a>.</p>`,
};

// 3. Quiz first: a phone-style app. A bottom tab bar, large cards, practice is the main door.
const app = {
  id: 'app', name: 'Quiz first', css: '/assets/designs/app.css',
  tagline: 'Practice is the front door. Big cards and a tab bar at the thumb.',
  best_for: 'Phones, short sessions, learners who learn by testing.',
  shell: ({ ctx, key, h1, body, crumbs, unofficial, family, footer, NAV, esc }) => {
    const tabs = [['home', 'Home'], ['test', 'The test'], ['hc', 'Rules'], ['practice', 'Quiz'], ['hazard', 'Hazards']];
    return `<body class="d-app">
<a class="skip" href="#main">Skip to content</a>
${family}${unofficial}
<header class="bar"><a class="name" href="${ctx.href('home')}">${SITE}</a></header>
<main id="main">${crumbHtml(crumbs, esc)}<h1>${esc(h1)}</h1>
${body}
${footer}
</main>
<nav class="tabs" aria-label="Main">${tabs.map(([k, l]) => `<a href="${ctx.href(k)}"${k === key ? ' aria-current="page"' : ''}>${esc(l)}</a>`).join('')}<a href="${ctx.href('sources')}"${key === 'sources' ? ' aria-current="page"' : ''}>About</a></nav>
</body>`;
  },
  home: (ctx, d) => `<p class="lede">Practise for the UK theory test in short rounds. Every question cites the Highway Code rule.</p>
<a class="hero" href="${d.firstQuiz}"><span class="k">Start a quiz</span><span class="t">${d.esc(d.topics[0].title)}</span><span class="b">${d.quizCount(d.topics[0].slug)} questions</span></a>
<h2>Pick a topic</h2>
<ul class="tiles">${d.quizTopics.map((t) => `<li><a href="${ctx.href('quiz', t.slug)}"><span class="t">${d.esc(t.title)}</span><span class="b">${d.quizCount(t.slug)} questions</span></a></li>`).join('')}</ul>
<h2>Learn first</h2>
<ul class="tiles two"><li><a href="${d.hrefs.test}"><span class="t">How the test works</span><span class="b">From GOV.UK</span></a></li><li><a href="${d.hrefs.hc}"><span class="t">The Highway Code</span><span class="b">Ten topics</span></a></li><li><a href="${d.hrefs.hazard}"><span class="t">Hazard perception</span><span class="b">Explained</span></a></li></ul>
<p class="note">Unofficial. Questions are written by this site. Check <a href="https://www.gov.uk/theory-test">GOV.UK</a> for the rules, booking and fees.</p>`,
};

// 4. Highway Code book: serif, a contents margin, rule numbers in the margin. Reference-first.
const book = {
  id: 'book', name: 'Highway Code book', css: '/assets/designs/book.css',
  tagline: 'Like a well-set reference book: contents beside the text, rule numbers in the margin.',
  best_for: 'Learners who study from the rules and want to see the source at once.',
  shell: ({ ctx, key, h1, body, crumbs, unofficial, family, footer, NAV, esc }) => `<body class="d-book">
<a class="skip" href="#main">Skip to content</a>
${family}${unofficial}
<header class="mast"><a class="name" href="${ctx.href('home')}">${SITE}</a><p class="sub">An unofficial study companion</p></header>
<div class="cols">
<nav class="toc" aria-label="Contents"><p class="toch">Contents</p><ol>${NAV.slice(1).map(([k, label]) => `<li><a href="${ctx.href(k)}"${k === key ? ' aria-current="page"' : ''}>${esc(label)}</a></li>`).join('')}</ol></nav>
<main id="main">${crumbHtml(crumbs, esc)}<h1>${esc(h1)}</h1>
${body}
</main></div>
${footer}
</body>`,
  home: (ctx, d) => `<p class="lede">A study companion for the UK car theory test: what the test is, the Highway Code summarised by topic, practice questions that cite their rules, and hazard perception explained.</p>
<h2>Contents</h2>
<ol class="contents">
<li><a href="${d.hrefs.test}">How the theory test works</a></li>
<li><a href="${d.hrefs.hc}">The Highway Code by topic</a>
<ol>${d.topics.map((t) => `<li><a href="${ctx.href('topic', t.slug)}">${d.esc(t.title)}</a></li>`).join('')}</ol></li>
<li><a href="${d.hrefs.practice}">Practice quizzes</a></li>
<li><a href="${d.hrefs.hazard}">Hazard perception explained</a></li>
<li><a href="${d.hrefs.sources}">Sources and licence</a></li>
</ol>
<p class="note">Unofficial. Summaries and questions are written by this site. The rules themselves are on <a href="https://www.gov.uk/guidance/the-highway-code">GOV.UK</a>.</p>`,
};

// 5. Road map: a dark journey. The learner moves down a road with stops: test, rules, practice, hazards.
const road = {
  id: 'road', name: 'Road map', css: '/assets/designs/road.css',
  tagline: 'A journey down a road, with stops. High contrast, dark by default.',
  best_for: 'Learners who like a sense of progress, and night-time revision.',
  shell: ({ ctx, key, h1, body, crumbs, unofficial, family, footer, NAV, esc }) => `<body class="d-road">
<a class="skip" href="#main">Skip to content</a>
${family}${unofficial}
<header class="top"><a class="name" href="${ctx.href('home')}">${SITE}</a>
<details class="menu"><summary>Menu</summary><nav aria-label="Main">${navItems(ctx, NAV, key, esc)}</nav></details></header>
<main id="main">${crumbHtml(crumbs, esc)}<h1>${esc(h1)}</h1>
${body}
</main>
${footer}
</body>`,
  home: (ctx, d) => `<p class="lede">Your road to the theory test. Take it one stop at a time.</p>
<ol class="road">
<li><span class="stop" aria-hidden="true"></span><div><h2><a href="${d.hrefs.test}">Stop 1: the test</a></h2><p>Two parts, the timings and pass marks, and what to take.</p></div></li>
<li><span class="stop" aria-hidden="true"></span><div><h2><a href="${d.hrefs.hc}">Stop 2: the rules</a></h2><p>The Highway Code in ten topics, every rule linked to the source.</p></div></li>
<li><span class="stop" aria-hidden="true"></span><div><h2><a href="${d.hrefs.practice}">Stop 3: practise</a></h2><p>Quizzes by topic. Each answer names its rule.</p></div></li>
<li><span class="stop" aria-hidden="true"></span><div><h2><a href="${d.hrefs.hazard}">Stop 4: spot the hazard</a></h2><p>What a developing hazard is, and how to scan for one.</p></div></li>
</ol>
<p class="note">Unofficial. Questions are written by this site. Check <a href="https://www.gov.uk/theory-test">GOV.UK</a> for the rules, booking and fees. <a href="${d.hrefs.sources}">Sources and licence</a>.</p>`,
};

export const DESIGNS = [plain, course, app, book, road];
