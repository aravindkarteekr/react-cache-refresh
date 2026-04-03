# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2026-03-11

### Added

- **Custom Metadata Path**: Added the `metaJsonPath` prop to the `CacheBuster` component. This allows users to specify a custom path or URL for their version metadata file instead of the default `/meta.json` fallback.

### Changed

- **Package Manager Migration**: Migrated the project's dependency management from Yarn to npm for better compatibility and to resolve local symlink/permission issues. Updated the GitHub Actions CI/CD workflows (`npm-publish.yml`) to use `npm ci` and `npm run build`.

### Security

- **Audit Fixes**: Resolved all dependency vulnerabilities in both the main package and the `test-app` workspace.
