## 2024-05-22 - [HIGH] Fix Reverse Tabnabbing vulnerability
**Vulnerability:** Usage of `window.open(url, '_blank')` without `noopener,noreferrer` allows the opened page to access `window.opener` and potentially redirect the original page (Reverse Tabnabbing).
**Learning:** Always include `noopener,noreferrer` when using `_blank` target, or set `rel="noopener noreferrer"` on anchor tags.
**Prevention:** Use a wrapper function for opening external links or enforce linting rules to catch this pattern.
