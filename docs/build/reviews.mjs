// Design review rounds. Updated as each round happens. Never claim a review that did not take place.
export const RECOMMENDATION = { id: 'course', why: 'The audience is people learning for the first time, often young and often on a phone. A numbered route (know the test, learn the rules, practise, train your eyes) tells them what to do next without asking them to plan. It keeps the plain page’s text-first calm, collapses to a simple stacked route on a phone, and does not depend on colour or icons. Quiz first is the strongest on a phone but hides the learning steps; Plain page is the safest but gives no guidance; Highway Code book suits revision more than first contact; Road map is the most memorable but its dark look is a heavier choice to hand to every visitor.' };
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
  { id: 'round-2', title: 'Round 2: design review', who: 'design.b, requested through a.maestro (session_018yvwtLiem1AqdA1YkKse4h)', date: 'requested 25 November 2026', status: 'awaiting the reviewer', findings: [], changes: [] },
];
