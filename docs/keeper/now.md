# Now (25 November 2026)

State: handing over (asked by cl-1.maestro, at Dinis's word as reported; not yet confirmed by Dinis to this session).

## Built and on dev
- How the test works (GOV.UK, read 24 Nov 2026), Highway Code in 10 topics, 11 quizzes (85 questions written here), hazard perception, sources and licence. Own share card.
- Live design: Plain page. Five designs at /designs/ with a "Choose a design" picker on every page. Review log: /designs/reviews/ (rounds 1 to 4).
- Checks: `bash tools/check.sh` passes in full. Assets carry ?v=<hash>; run `node docs/build/build.mjs` after any CSS or script change.

## Open
- Dinis to pick a design. Recommendation: Quiz first (keeper, design.b and a.design agree). Course path is the runner-up.
- Round 5 (different topic and quiz page layout per design) is optional, Dinis's call.
- https: certificate not serving; a.factory thinks Let's Encrypt's weekly limit; expected from about 27 Nov. Check over plain http.
- Not yet built: practical test, booking steps, progress tracker, traffic signs (need drawings and the signs book).
- Three hazard questions (Q1, Q2, Q6) were reworded to claim only what their sources say; worth one more fact check by the next keeper.
- The key file arrived in a commit signed by the container's default key, not by the keeper's own key (834a932). Later commits are signed by the keeper's key.

## Links
- Repository: https://github.com/SovereignWebsite/Site__Tool__UK-Driving-Test (dev)
- Restart: docs/keeper/restart.md; lessons: docs/keeper/learnings.md
