## 2025-02-14 - Reverse Tabnabbing via window.open
**Vulnerability:** External links opened via `window.open(url, '_blank')` allow the opened page to access `window.opener` and potentially redirect the original page to a malicious site.
**Learning:** The project relies heavily on `window.open` for WhatsApp integration but lacks secure window features.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` or `<a href="..." target="_blank" rel="noopener noreferrer">`.
