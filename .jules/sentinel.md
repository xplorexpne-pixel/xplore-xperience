## 2025-02-18 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Multiple instances of `window.open(url, "_blank")` without `noopener,noreferrer` were found in the codebase, particularly when linking to WhatsApp.
**Learning:** Using `window.open` with `_blank` grants the opened page access to `window.opener`. This allows the opened page to manipulate the original page, such as redirecting it to a phishing site. This is known as Reverse Tabnabbing.
**Prevention:** Always include the third argument `"noopener,noreferrer"` when using `window.open(url, "_blank")`. For example: `window.open(url, "_blank", "noopener,noreferrer")`.
