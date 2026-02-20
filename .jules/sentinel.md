## 2024-05-22 - [Fixed Reverse Tabnabbing Vulnerability]
**Vulnerability:** Several instances of `window.open(url, "_blank")` were found without `noopener,noreferrer`. This allows the opened page to access the original page's `window` object via `window.opener`, potentially leading to phishing attacks (Reverse Tabnabbing).
**Learning:** Even when using `window.open` instead of `<a>` tags, it is crucial to explicitly specify "noopener,noreferrer" features. Modern browsers often imply `noopener` for `_blank`, but explicit declaration is safer and covers older browsers or non-standard behaviors.
**Prevention:** Always use `window.open(url, "_blank", "noopener,noreferrer")` when opening external links in a new tab programmatically.
