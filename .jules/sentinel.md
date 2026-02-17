## 2024-05-22 - Reverse Tabnabbing via window.open
**Vulnerability:** Multiple instances of `window.open(url, '_blank')` were found, which allows the new page to access `window.opener` and potentially redirect the original page to a malicious site (Reverse Tabnabbing).
**Learning:** Developers often forget that `window.open` does not automatically include `noopener` and `noreferrer` protections, unlike modern browsers' handling of `<a target="_blank">`.
**Prevention:** Always include `'noopener,noreferrer'` as the third argument to `window.open` when opening external links: `window.open(url, '_blank', 'noopener,noreferrer')`.

## 2024-05-22 - Trailing Spaces in Filenames
**Vulnerability:** A file named `DestinationCard .jsx` (with a trailing space) caused critical build failures in the Cloudflare CI environment.
**Learning:** File systems on different OSs handle trailing spaces differently. While valid on some (like macOS or Linux), they can cause issues in CI/CD pipelines or Windows environments.
**Prevention:** Avoid spaces in filenames entirely; use kebab-case or PascalCase. Always sanitize filenames before committing.

## 2024-05-22 - Strict Linting in CI
**Vulnerability:** The CI pipeline treats all ESLint errors (including `no-unused-vars` in auxiliary files like `manual_rotate.js`) as fatal build failures.
**Learning:** Local development environments might be more permissive or have different lint configurations than CI. The CI environment enforces a zero-tolerance policy for lint errors to maintain code quality.
**Prevention:** Always run `npm run lint` locally before pushing changes. Ensure all unused variables are removed or properly prefixed with `_` if they are intentional (e.g., `_prev`).
