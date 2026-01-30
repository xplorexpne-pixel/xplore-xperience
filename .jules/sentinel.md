## 2025-02-19 - Hardcoded Firebase Config
**Vulnerability:** Firebase configuration object with placeholders was hardcoded in `src/FireBase.js`.
**Learning:** Project lacked environment variable setup (.env) and gitignore rules for secrets.
**Prevention:** Migrated to `import.meta.env`, added `.env.example`, and updated `.gitignore`.
