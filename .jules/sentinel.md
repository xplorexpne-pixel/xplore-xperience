## 2026-02-05 - Reverse Tabnabbing Vulnerability in External Links
**Vulnerability:** Usage of `window.open(url, '_blank')` without `noopener,noreferrer` allows the opened page to manipulate the opener (Reverse Tabnabbing).
**Learning:** Even in modern frameworks like React, explicit window opening needs security features `noopener` and `noreferrer`.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` or `rel="noopener noreferrer"` for anchor tags.
