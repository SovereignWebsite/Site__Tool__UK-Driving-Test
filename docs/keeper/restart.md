# Restart notes

1. Read CLAUDE.md, this folder, docs/build/content.mjs.
2. Your signing key's private half is lost with the old session. Make a new key (ssh-keygen -t ecdsa -b 256), publish only the public half as site/keys/<new-name>.json in a commit that adds that file alone, then sign with it. The container's default git signer (/tmp/code-sign) signs with a shared key; set `git config gpg.ssh.program ssh-keygen` locally and `user.signingkey` to your private key path.
3. Rebuild: `node docs/build/build.mjs`. CI checks: `node .github/ci/build.mjs && node .github/ci/quality.mjs _site`.
4. Facts to re-read before changing: GOV.UK /theory-test pages, Highway Code rule pages. Update READ in content.mjs.
