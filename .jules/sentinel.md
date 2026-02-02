## 2025-02-12 - Reverse Tabnabbing via window.open
**Vulnerability:** Multiple components used `window.open(url, '_blank')` to open WhatsApp links without `noopener` or `noreferrer`.
**Learning:** The project relies heavily on `window.open` for external integrations instead of anchor tags, which requires manual security handling.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` or prefer `<a href="..." target="_blank" rel="noopener noreferrer">`.
