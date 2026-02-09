## 2024-02-12 - Reverse Tabnabbing in External Links
**Vulnerability:** Multiple instances of window.open(url, '_blank') were found, specifically for WhatsApp integrations, without 'noopener,noreferrer'.
**Learning:** Modern browsers imply 'noopener' for '_blank', but 'noreferrer' is not guaranteed. This exposes users to Reverse Tabnabbing attacks where the new tab can manipulate the original page location.
**Prevention:** Always include 'noopener,noreferrer' as the third argument in window.open() when targeting '_blank', or use a helper function to enforce this pattern.
