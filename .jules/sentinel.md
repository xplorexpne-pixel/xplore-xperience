## 2024-05-23 - Reverse Tabnabbing Protection
**Vulnerability:** Multiple instances of `window.open(url, '_blank')` without `noopener` or `noreferrer` features were found across the codebase.
**Learning:** This exposes the application to Reverse Tabnabbing attacks where the new page can control the original page via `window.opener`.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` when opening external links in a new tab.
