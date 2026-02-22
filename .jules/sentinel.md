## 2025-02-12 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Found multiple instances of `window.open(url, "_blank")` without `noopener,noreferrer`. This exposes the application to Reverse Tabnabbing attacks where the opened page can access the `window.opener` object and redirect the original page.
**Learning:** Even though modern browsers often imply `noopener` for `target="_blank"`, `window.open` behavior can be inconsistent across browsers and versions. Explicitly adding the features string is necessary for security.
**Prevention:** Always use `window.open(url, "_blank", "noopener,noreferrer")` when opening external links in a new tab. For `<a>` tags, use `rel="noopener noreferrer"`.
