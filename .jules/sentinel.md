## 2026-02-01 - [CRITICAL] Hardcoded Secrets Placeholders
**Vulnerability:** The `src/FireBase.js` file contained placeholders like `YOUR_API_KEY` directly in the source code. This pattern encourages developers to hardcode actual secrets in the file, which often leads to accidental commit of sensitive credentials.
**Learning:** Even placeholders can be dangerous as they normalize the pattern of configuration-in-code.
**Prevention:** Always use `import.meta.env` (for Vite) or `process.env` (for other Node envs) to access configuration. Provide a `.env.example` file to guide developers on required variables without exposing secrets.
