# Learnings

- The container's git signs with a shared key whatever user.signingkey says. Set gpg.ssh.program to ssh-keygen locally and verify with an allowed-signers file before pushing.
- Run the whole check (tools/check.sh) before every push: share-check needs og: and twitter: tags on every page; axe caught an unlandmarked notice, low-contrast credit links and a visible empty button.
- A CSS rule that sets display beats the hidden attribute. Keep [hidden]{display:none!important}.
- Browsers cache stylesheets at the same address: every asset link carries ?v=<content hash>. Design previews are inline SVG with their own size so they stay small with CSS blocked.
- Do not claim a review that did not happen, and do not claim a fresh check you did not run.
- Questions: cite a rule that really says what the answer says; mark scenarios that are the site's own; keep GOV.UK facts and Highway Code facts apart.
- Pull before pushing: factory refreshes files (build.mjs, axe.mjs, tools/) on dev.
