## 2025-02-18 - Reverse Tabnabbing in WhatsApp Links
**Vulnerability:** Multiple instances of `window.open(url, '_blank')` were found without `noopener,noreferrer`.
**Learning:** Developers frequently copy-pasted a WhatsApp integration pattern that lacked security features.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` or `<a target="_blank" rel="noopener noreferrer">`.

## 2025-02-18 - CI Linting Strictness
**Vulnerability:** CI fails on any lint error, including false positives for JSX variables (e.g. `motion`).
**Learning:** `no-unused-vars` is enabled but `eslint-plugin-react` is missing.
**Prevention:** Use `/* eslint-disable no-unused-vars */` for files with `framer-motion` components if plugin cannot be added.

## 2025-02-18 - Cloudflare Build Sensitivity
**Vulnerability:** Cloudflare CI fails on filenames with trailing spaces (e.g. `File .jsx`), which local filesystems might tolerate.
**Learning:** CI environments are stricter than local dev environments regarding file naming.
**Prevention:** Sanitize filenames and avoid spaces, especially trailing ones.

## 2025-02-18 - Cloudflare Build Sensitivity (Update)
**Vulnerability:** Filenames with trailing spaces are fatal to Cloudflare builds.
**Learning:** Renaming such files (e.g. `mv 'A .jsx' 'A.jsx'`) might not be enough if git history is messy. Deleting unused files is safer.
**Prevention:** Strictly validate filenames before commit.
