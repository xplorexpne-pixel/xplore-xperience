## 2024-05-22 - Reverse Tabnabbing via window.open
**Vulnerability:** Multiple instances of `window.open(url, '_blank')` were found, which allows the new page to access `window.opener` and potentially redirect the original page to a malicious site (Reverse Tabnabbing).
**Learning:** Developers often forget that `window.open` does not automatically include `noopener` and `noreferrer` protections, unlike modern browsers' handling of `<a target="_blank">`.
**Prevention:** Always include `'noopener,noreferrer'` as the third argument to `window.open` when opening external links: `window.open(url, '_blank', 'noopener,noreferrer')`.
