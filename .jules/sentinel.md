## 2026-02-01 - [CRITICAL] Hardcoded Secrets Placeholders
**Vulnerability:** The `src/FireBase.js` file contained placeholders like `YOUR_API_KEY` directly in the source code. This pattern encourages developers to hardcode actual secrets in the file.
**Learning:** Even placeholders can be dangerous as they normalize the pattern of configuration-in-code. Additionally, unused code (dead code) increases the attack surface and maintenance burden.
**Prevention:** Remove unused code. When configuration is needed, use `import.meta.env` (for Vite) or `process.env`.
