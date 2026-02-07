## 2025-05-27 - Reverse Tabnabbing in window.open

**Vulnerability:** Found multiple instances of `window.open(url, '_blank')` without `noopener,noreferrer` features.
**Learning:** This exposes the application to Reverse Tabnabbing attacks where the new page can access `window.opener` and redirect the original page to a malicious site.
**Prevention:** Always include `'noopener,noreferrer'` as the third argument to `window.open` when targeting `_blank`.
