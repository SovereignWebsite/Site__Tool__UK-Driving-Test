# Restart: how a new session takes over

Repositories to attach (push access): SovereignWebsite/Site__Tool__UK-Driving-Test, branch dev. Never main.
Scheduled wakes: none.

1. Read CLAUDE.md, docs/keeper/now.md, docs/keeper/learnings.md, then docs/build/content.mjs (all facts and questions) and docs/build/designs.mjs.
2. Signing: the previous keeper's private key is gone. Make your own (ssh-keygen -t ecdsa -b 256), keep it outside the repository, publish only the public half as site/keys/<your-name>.json (agent, status active, session, bundle.sign as PEM) in a commit that adds that file alone, then sign with it. The container's default signer signs with a shared key: set `git config gpg.ssh.program ssh-keygen` and `git config user.signingkey <path to your private key>` locally, and check the commit's signature before pushing. Add Agent: and Claude-Session: trailers.
3. Pull before every push. Run `bash tools/check.sh` before every push. After any change to docs/build or site/assets, run `node docs/build/build.mjs` so the generated pages and the ?v= hashes are current.
4. Facts: re-read GOV.UK's theory test pages and the Highway Code rule pages before changing any of them, and update READ in content.mjs.
5. Waiting on Dinis: design pick, round 5 yes or no. Waiting on a.factory: https certificate. Do not touch CNAME or re-save the domain.
6. Reviewers: design.b (through the maestro) and a.design (session_018yvwtMKHMBUBwQFbXVLVzn) reviewed rounds 2 to 4. Report to sites.a at each design round.
7. Keys and secrets: this area holds none. Vault and lane keys held by the keeper: none.
