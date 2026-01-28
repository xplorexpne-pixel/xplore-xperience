## 2025-01-26 - [CRITICAL] Hardcoded Secrets in Firebase Config
**Vulnerability:** Hardcoded placeholder credentials in `src/FireBase.js`.
**Learning:** Hardcoded secrets, even placeholders, pose a risk of accidental exposure if real keys are substituted and committed. They also prevent configuration across different environments.
**Prevention:** Use environment variables (e.g., `import.meta.env` in Vite) and ensure `.env` files are git-ignored.
