## 2025-01-28 - Hardcoded Secrets & GitIgnore Leakage

**Vulnerability:**
1.  Hardcoded placeholder secrets in `src/FireBase.js` set a dangerous pattern.
2.  Missing `.env` entry in `.gitignore` creates a high risk of accidental secret leakage if a developer creates the file locally.

**Learning:**
Even if values are placeholders ("YOUR_API_KEY"), they should never exist in the codebase. It encourages bad practices. The absence of `.env` in `.gitignore` is a silent ticking time bomb in many projects.

**Prevention:**
1.  Always use `import.meta.env` (or `process.env`) for configuration.
2.  Ensure `.gitignore` explicitly includes `.env`, `.env.local`, and other secret-bearing files before the first commit.
3.  Provide `.env.example` for safe onboarding.
