## 2024-05-22 - Reverse Tabnabbing in External Links
**Vulnerability:** Usage of `window.open(url, '_blank')` without `rel="noopener noreferrer"` allowed the opened page to access `window.opener`, potentially enabling malicious redirects or phishing.
**Learning:** Developers often forget to add `rel="noopener noreferrer"` when using `_blank`, especially for external links like WhatsApp.
**Prevention:** Always include `rel="noopener noreferrer"` when using `target="_blank"` or `window.open(..., '_blank')`. Linting rules can enforce this for anchor tags, but manual vigilance is needed for `window.open`.
