## 2024-05-22 - [Insecure Window Open Usage]
**Vulnerability:** Widespread usage of `window.open(url, '_blank')` for WhatsApp integration without `noopener,noreferrer`.
**Learning:** Developers consistently use `window.open` for external links (specifically WhatsApp) but omit the security features, leaving the application vulnerable to Reverse Tabnabbing.
**Prevention:** Enforce `noopener,noreferrer` for all `window.open` calls with `_blank`, or use a wrapper function/component for external links.
