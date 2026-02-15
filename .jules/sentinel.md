## 2025-02-15 - Trailing Spaces in Filenames Break CI
**Vulnerability:** Filenames with trailing spaces (e.g., `DestinationCard .jsx`) cause critical build failures in the Cloudflare CI environment, even if local builds pass. This can lead to denial of service for deployments.
**Learning:** Cloudflare Workers/Pages build environments are strict about file naming conventions that might be lenient on local OS (like macOS/Windows).
**Prevention:** Enforce linting rules or pre-commit hooks to reject filenames with trailing spaces. Always verify file names in PRs.

## 2025-02-15 - Unprotected Environment Variables
**Vulnerability:** The project lacked `.gitignore` entries for `.env` files and hardcoded placeholders in `src/FireBase.js`, increasing the risk of accidental secret exposure.
**Learning:** Initial project setups often miss standard security ignores.
**Prevention:** Added `.env` and `.env.local` to `.gitignore` and migrated to `import.meta.env` for configuration.
