# Changelog

All notable changes to this project will be listed in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.7.2] - 2026-01-17

### Changed

- Upgraded npm dependencies
- Updated README.md

## [3.7.1] - 2026-01-17

### Changed

- Refactored `TextInput` component with stateless mode support
- Refactored `NumericInput` component with stateless mode support
- Refactored `Checkbox` component with stateless mode support
- Updated Biome configuration

## [3.7.0] - 2026-01-06

### Added

- `useRemainingTimer()` hook
- `useIsHovered()` hook
- Progress bar with countdown timer to Alert component
- Copilot instructions

### Changed

- Reorganized folders inside the repository
- Upgraded Storybook and npm dependencies

## [3.6.0] - 2025-12-23

### Added

- Accordion component

### Changed

- Upgraded Storybook to v.10.1.10
- Updated npm dependencies

## [3.5.3] - 2025-12-14

### Changed

- Upgraded React peer dependency to v19.2.1
- Updated all npm dependencies
- Upgraded Storybook to v10.1.8

## [3.5.2] - 2025-12-02

### Added

- Categories to argTypes tables

### Changed

- Updated documentation for all components
- Upgraded Storybook to v10.1.2

## [3.5.1] - 2025-11-14

### Added

- Copilot instructions

### Changed

- Updated Biome config
- Made Switch controller connected to Form context

### Fixed

- Biome warnings

## [3.5.0] - 2025-11-09

### Added

- SCSS mixins for media queries
- Responsive font mixin to change font size for different screens
- Prettier for formatting .scss and .mdx files (not supported by Biome formatter)
- Responsive Image component

### Changed

- Upgraded Storybook to v.10.0.6

### Fixed

- Responsiveness issues for main components

## [3.4.0] - 2025-10-24

### Added

- Switch component with customizable labels and styles
- New logo and ChopLogic icon

### Changed

- Migrated code base to Biome from ESLint and Prettier
- Upgraded Storybook to v9.1.13
- Upgraded react and react-dom peer dependencies to v19.2.0

## [3.3.0] - 2025-10-11

### Added

- Link component with external and internal link support
- Breadcrumbs component with customizable items

### Changed

- Updated documentation for Link and Breadcrumbs components

### Fixed

- SonarCloud issues

## [3.2.0] - 2025-10-04

### Added

- Search component with automatic and manual search modes
- useDebounce hook with interactive story

### Changed

- Refactored Checkbox and Search components to use IconName enum for icons
- Updated documentation for Checkbox and Search components
- Upgraded Storybook to v9.1.10

## [3.1.0] - 2025-09-26

### Changed

- Extended Tabs component by adding editable titles and dynamic tab management
- Updated documentation for Tabs component

### Fixed

- Styles import issue
- SonarCloud issues

## [3.0.0] - 2025-09-11

### Changed

- Optimized the package size
- Renamed all exported components by removing "ChopLogic..." prefix

### Fixed

- Build script

## [2.6.0] - 2025-09-06

### Added

- EditableText component
- New story for the Label component

### Changed

- Refactored code structure
- Upgraded Storybook

### Removed

- Custom fonts in favor of browser default ones for compatibility

## [2.5.3] - 2025-08-09

### Changed

- Updated Introduction page
- Updated publish to GitHub pages workflow
- Upgraded Storybook

## [2.5.2] - 2025-08-06

### Changed

- Updated links in documentation files
- Updated npm publish workflow

## [2.5.0] - 2025-08-04

### Changed

- Moved the repo to a new organization
- Updated README and github templates
- Upgraded Storybook

## [2.4.1] - 2025-07-27

### Changed

- Reordered imports in all files using eslint plugin
- Updated documentation for molecules and organisms

## [2.4.0] - 2025-07-18

### Added

- New fonts and colors

### Changed

- Updated the design of components
- Updated documentation for atoms and hooks

## [2.3.0] - 2025-06-15

### Changed

- Upgraded Storybook to v.9
- Reorganized components in Storybook according to the Atomic Design principles

## [2.2.0] - 2025-05-21

### Added

- SCSS mixins and variables

### Changed

- Migrated from styled-component to scss modules
- Updated light and dark color themes

## [2.1.0] - 2025-04-27

### Added

- New documentation pages (Changelog, Contributing)

### Changed

- Upgraded Storybook
- Updated npm dependencies
- Updated npm scripts
- Optimized build script

## [2.0.1] - 2025-02-14

### Changed

- Upgraded Storybook
- Refactored components
- Updated module exports

## [2.0.0] - 2024-12-24

### Added

- Configured code coverage reports
- Published Storybook on GitHub pages

### Changed

- Upgraded to React 19
- Refactored documentation