// Design review rounds. Updated as each round happens. Never claim a review that did not take place.
export const RECOMMENDATION = { id: 'app', why: 'Quiz first, as home. After design.b\u2019s round 2 the keeper changed its recommendation from Course path. The audience is first-time learners on phones, and what they come back to do is practise, so "Start a quiz" belongs on the first screen, with bottom tabs a phone user already knows. Course path (the runner-up, now with a one-line "Step 2 of 5" route on phones) is the better choice if the owner wants learners guided through the steps in order. Road map is the most memorable and suits being the showpiece for sharing. Plain page stays live until the owner picks.' };
export const REVIEWS = [
  { id: 'round-1', title: 'Round 1: keeper review', who: 'uk-driving-test.a (the site keeper): axe-core on all 48 pages, light and dark, at 1280 and 375 pixels wide, with a quiz checked; a scripted keyboard and storage test; screenshots of every design at both widths', date: '25 November 2026', status: 'done; round 2 (design.b, asked through a.maestro) is awaited',
    findings: [
      'Axe: the unofficial notice sat outside any landmark on every page (rule "region").',
      'Axe: the Sovereign Website credit was low contrast on Quiz first (over the top bar) and on Road map (a dark page with a light-theme credit).',
      'The quiz works with the keyboard alone, moves focus to the result, shows each answer with its rule, and with scripts off shows every answer and explanation.',
      'No cookies, no external requests, and "clear my saved results" empties local storage.',
      'Course path on a phone: the route takes a lot of the first screen.',
      'All five designs are visibly different in structure: top bar, side route, bottom tabs, contents margin, road with stops.',
    ],
    changes: [
      'The notice is now an aside landmark with a label.',
      'The credit colours are set for the dark page on Road map, and the override on Quiz first is removed.',
      'Course path on a phone: the route sits in two columns at a smaller size.',
    ] },
  { id: 'round-2', title: 'Round 2: design.b review', who: 'design.b, requested through a.maestro. Review: https://design.agents.sovereignweb.site/reviews-uk-driving-test-2026-11-25-round-2.html (design.b reviewed from source, because the live address had no valid certificate yet; its synthetic-user run follows once the site serves)', date: '25 November 2026', status: 'done; changes made; round 3 when the site is live',
    findings: [
      'design.b recommends Quiz first as the home and Road map as the showpiece, and disagrees with the keeper\u2019s Course path: on a phone its first screen is a menu, and nothing says you are here.',
      'The site title appeared twice on every first screen and the notice band took two lines.',
      'No design showed progress, although results are already saved in the browser.',
      'No imagery: the world of the theory test has strong pictures of its own.',
      'Course path on a phone: collapse the route to one line. Highway Code book: nothing may read as the official Code.',
      'Rated M2 until the synthetic-user run.',
    ],
    changes: [
      'The home heading is now \u201cGet ready for the UK theory test\u201d, so the title shows once.',
      'The notice is one line on a phone: \u201cUnofficial: not the DVSA or GOV.UK\u201d.',
      'Progress from the learner\u2019s own saved results: best scores on the Quiz first tiles, the Road map stop for practice fills in, and Course path says \u201cYou are here\u201d. The book keeps its contents list.',
      'Signs drawn by this site from basic shapes (triangle, circle, rectangle), not copied from the Highway Code: on the Road map stops, on the Quiz first start card and on the Highway Code book plate. Plain page has none, by design.',
      'Course path on a phone: the route is one line, \u201cStep 1 of 5: How the test works\u201d, that opens on tap. On a desktop the route\u2019s line is a dashed road marking.',
      'The recommendation is now Quiz first. The Highway Code book still says \u201cAn unofficial study companion\u201d under its title, and the notice is on every page.',
    ] },
];
