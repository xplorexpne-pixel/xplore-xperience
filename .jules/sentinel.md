## 2024-05-22 - [Insecure Window Open Usage]
**Vulnerability:** Widespread usage of `window.open(url, '_blank')` for WhatsApp integration without `noopener,noreferrer`.
**Learning:** Developers consistently use `window.open` for external links (specifically WhatsApp) but omit the security features, leaving the application vulnerable to Reverse Tabnabbing.
**Prevention:** Enforce `noopener,noreferrer` for all `window.open` calls with `_blank`, or use a wrapper function/component for external links.

## 2024-05-22 - [CI Failure due to Trailing Space in Filename]
**Vulnerability:** Filenames with trailing spaces (e.g., `DestinationCard .jsx`) cause critical build failures in Cloudflare CI environments, even if local builds pass on some OSs.
**Learning:** Filesystem compatibility issues can be silent locally but fatal in CI/CD pipelines.
**Prevention:** Enforce strict file naming conventions in CI or pre-commit hooks to reject filenames with trailing spaces.

## 2024-05-22 - [Linting Failures in CI]
**Vulnerability:** Strict linting in CI pipelines can cause build failures even for non-critical issues like unused variables or hooks warnings.
**Learning:** Legacy code or incomplete refactors often leave behind unused variables that local dev environments might ignore but CI/CD pipelines strictly enforce.
**Prevention:** Ensure local linting matches CI configuration. Use `eslint-disable` sparingly but effectively to unblock critical fixes when full refactoring is out of scope.
