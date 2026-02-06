## 2025-02-18 - Reverse Tabnabbing in WhatsApp Links
**Vulnerability:** Multiple instances of `window.open(url, '_blank')` were found without `noopener,noreferrer`.
**Learning:** Developers frequently copy-pasted a WhatsApp integration pattern that lacked security features.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` or `<a target="_blank" rel="noopener noreferrer">`.
