## 2025-02-18 - Hardcoded Firebase Configuration Pattern
**Vulnerability:** Found hardcoded Firebase configuration object with placeholders (`YOUR_API_KEY`) in `src/FireBase.js`.
**Learning:** Even placeholders can be dangerous as they establish a pattern of committing configuration to version control. Developers might replace them with real keys and commit them.
**Prevention:** Enforce usage of `import.meta.env` for all sensitive configuration values to ensure they are loaded from environment variables.
