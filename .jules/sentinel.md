## 2025-02-19 - Hardcoded Firebase Config
**Vulnerability:** Firebase configuration object with placeholders was hardcoded in `src/FireBase.js`.
**Learning:** Project lacked environment variable setup (.env) and gitignore rules for secrets.
**Prevention:** Migrated to `import.meta.env`, added `.env.example`, and updated `.gitignore`.
## 2025-02-19 - CI Failure Fixes
**Vulnerability:** CI failed due to Node version mismatch and potential missing env vars.
**Learning:** React 19 and Rolldown require Node 18+. Cloudflare defaults may be older.
**Prevention:** Added `engines` field to `package.json`. Made Firebase config robust against missing env vars.
