## 2025-02-12 - Reverse Tabnabbing Vulnerability in WhatsApp Links
**Vulnerability:** Multiple instances of `window.open(url, '_blank')` were found without `noopener,noreferrer`. This exposes the application to Reverse Tabnabbing attacks, where the newly opened page can access `window.opener` and potentially redirect the original page or access sensitive information.
**Learning:** External links, especially those opening in a new tab (`_blank`), must always include `noopener,noreferrer` to isolate the new window context. This is particularly important for user-generated or dynamic links like WhatsApp integration.
**Prevention:** Use a helper function for opening external links that enforces `noopener,noreferrer`, or use a linting rule to flag `window.open` usage without these attributes.
