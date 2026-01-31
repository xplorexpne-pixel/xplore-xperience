## 2025-02-18 - Secure Firebase Config
**Vulnerability:** Hardcoded placeholder keys in `src/FireBase.js` encouraged insecure practices.
**Learning:** Default templates often lack environment variable integration, leading to potential secret leakage.
**Prevention:** Always use `import.meta.env` (or `process.env`) for sensitive config, even in boilerplate code.
