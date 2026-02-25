## 2026-02-25 - Reverse Tabnabbing via window.open
**Vulnerability:** Several instances of `window.open(url, "_blank")` were found without `noopener,noreferrer` features. This allows the opened page to access `window.opener` and potentially redirect the original page to a malicious site.
**Learning:** Even trusted domains (like `wa.me`) should be treated with caution when opening in a new tab, as `window.opener` leakage is a browser behavior regardless of the target domain's trustworthiness (though exploitation requires the target to be malicious or compromised).
**Prevention:** Always include `'noopener,noreferrer'` as the third argument when using `window.open(..., "_blank")`.
