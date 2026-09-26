# Changelog

All notable changes to this project will be listed in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.6.0] - 2026-09-26

### Added

- Column sorting for the `Grid` component: sortable columns display a `SortButton` in the header that cycles ascending → descending → unsorted, with support for both uncontrolled and controlled usage
- `Grid` sorting props: `sortable` per column, `sortableByDefault`, controlled `sortField`/`sortDirection`, and an `onSortChange` callback returning the current `GridSortState`
- Column filtering for the `Grid` component: filterable columns display a `FilterButton` that opens a `FilterPopup` for building per-column filter conditions
- `Grid` filtering props: `filterable` per column, `filterableByDefault`, controlled `filterState`, and an `onFilterChange` callback returning the current `GridFilterState`
- Filter conditions support `startsWith`, `includes`, and `equals` match types with an optional case-sensitive flag
- `GridEmptyState` shown when sorting/filtering leaves no matching rows
- `GridSortDirection` (`asc`/`desc`) and `GridFilterType` (`startsWith`/`includes`/`equals`) exported enums
- `GridSortState`, `GridFilterState`, `GridFilterCondition`, and `GridColumnFilter` exported types
- New `RadioGroup` atom with stateful and stateless variants: renders a `role="radiogroup"` with selectable options, supports `vertical` and `horizontal` orientation, and integrates with form loading state
- `RadioGroup` keyboard support: roving tab index, arrow-key navigation between options, and `Space` to select the focused option
- `RadioGroupProps` and `RadioGroupOption` exported types

### Changed

- `Grid` header rendering refactored into `HeaderCell` and `HeaderControls`, with grid state managed by the extracted `useGridSort`, `useGridFilter`, and `useGridSelection` hooks

## [4.5.2] - 2026-09-18

### Added

- Keyboard `Home` and `End` support for list-based navigation: `Home` moves focus to the first item and `End` to the last, in `Tabs`, `Select`, and `MultiSelect` dropdowns
- Generic `handleListKeyNavigation` utility handling `Home`/`End`, arrow keys, `Tab`, and `Escape`, with configurable `vertical`, `horizontal`, or `both` orientation
- `ListNavigationItem` and `ListNavigationOrientation` exported types
- Mobile slide animations for the `Dialog` component: the panel slides up from the bottom on open and down on close, using new `cl-slide-in-up` and `cl-slide-out-down` keyframes and utility classes (fade remains on tablet and larger screens)
- `a11y` and `a11y:dev` npm scripts running axe-core accessibility checks against Storybook stories, documented in the README

### Changed

- `Tabs`, `Select`, and `MultiSelect` dropdown keyboard handling refactored to share the common `handleListKeyNavigation` utility
- `Dialog` now links its title to the dialog element via `aria-labelledby` and a generated `id` for improved screen reader support
- `Switch` hidden input is now excluded from the tab order (`tabIndex={-1}`, `aria-hidden`) so focus lands on the interactive control only
- `ViewerImageContainer` and `ViewerOverlay` now require the `caption` prop

### Fixed

- `TabEditInput` now includes an associated visually hidden `Label` for the edit field, resolving a missing form label accessibility issue

## [4.5.1] - 2026-09-10

### Added

- `DeeplyNestedHorizontalMenu` Storybook story demonstrating Mac-style cascading submenus with 5 levels of nesting
- `MenuItem` interface documentation in Menu MDX docs

### Changed

- Horizontal menu nested submenus now cascade to the right (like macOS application menus) instead of appearing below and overlapping the parent
- Nested submenus in horizontal mode display a right-pointing chevron icon instead of down-pointing
- Updated Menu documentation with cascading submenu behavior description and best practices

### Fixed

- `isLoading` prop being passed to DOM in `InnerButton` component (React warning: "React does not recognize the `isLoading` prop on a DOM element")

## [4.5.0] - 2026-08-28

### Added

- Form loading state support: all interactive components (`TextInput`, `NumericInput`, `Search`, `Select`, `MultiSelect`, `Checkbox`, `Switch`, `Button`) accept an optional `isLoading` prop
- `useFormLoading` hook that resolves the effective loading state from an explicit prop or `FormContext`
- `isLoading` field in `FormContext`, automatically set to `true` during async form submissions
- Shimmer animation (`cl-shimmer` keyframe) for input components during loading state
- Spinning loader icon (`cl-spin` keyframe) replacing the regular icon on buttons during loading state
- Disabled-like appearance for `Checkbox` and `Switch` components during loading state
- Loading state Storybook stories and documentation for `Button`, `TextInput`, `Select`, and `Form`

### Changed

- `Form` submit button now uses `isLoading` with a spinning icon instead of `disabled` to indicate pending state
- `FormContext` extended with `isLoading` field alongside existing `isPending`
- `Button`, `PrimaryButton`, `SecondaryButton`, and `IconButton` prevent click events and set `aria-busy` when loading
- Input components (`TextInput`, `NumericInput`, `Search`) become readonly with a shimmer overlay when loading
- `Select` and `MultiSelect` prevent dropdown opening and show shimmer on the combobox when loading
- Updated Form documentation (MDX) with loading state propagation guide and loading vs disabled comparison
- Upgraded Storybook and updated npm dependencies

## [4.4.0] - 2026-07-17

### Added

- React 19 `useActionState` integration in the `Form` component for native `<form action>` support
- `isPending` state exposed via `FormContext` during async form submissions
- `useFormPending` hook for child components to read the form's pending state
- `action` prop on `Form` for React 19 native form action flow with `FormData`
- `resetOnSuccess` prop on `Form` to optionally reset fields after successful submission
- `onActionComplete` callback prop on `Form` to receive action result state
- `.cl-form_pending` CSS modifier with reduced opacity and disabled pointer events
- Comprehensive tests for both action and controlled submission flows

### Changed

- `Form` component refactored to support two submission flows: `action` (React 19 native) and `onSubmit` (controlled)
- `onSubmit` prop signature changed to `(data: FormValues) => void | Promise<void>` with async support and automatic pending state tracking
- Submit and reset buttons are now automatically disabled during pending state
- `FormContext` extended with `isPending` field
- Upgraded Storybook to v10.5.2 and updated npm dependencies
- Updated dependabot job 

### Removed

- `onClickSubmit` prop from `Form` (replaced by `onSubmit`)

## [4.3.0] - 2026-06-27

### Added

- `Avatar` atomic component
- `Tag` atomic component
- `PreviewCard` organism to display article previews with author avatars and tags

### Changed

- Upgraded Storybook to v10.4.6 and updated npm dependencies

### Fixed

- Sizes attribute not being passed to ResponsivePicture component
- Resolution and art direction sources for Responsive images inside `Image` and `Gallery` components
- Medium and small SonarQube maintainability issues

## [4.2.0] - 2026-06-11

### Added

- `Gallery` component with different display modes (grid, masonry and carousel) and fullscreen view support

### Changed

- Upgraded Storybook to v10.4.4 and updated npm dependencies

### Fixed

- CSS variables for colors in dark mode

## [4.1.1] - 2026-05-01

### Added

- Tests for `scripts/`
- Additional CI checks in GitHub Actions
- `test:integration` npm script and Storybook integration tests using Playwright

### Changed

- Upgraded Storybook to v10.3.6
- Updated npm dependencies and build script

## [4.1.0] - 2026-04-19

### Added

- `withErrorBoundary` HOC for wrapping components in a React error boundary with `ErrorMessage` fallback
- Storybook documentation for `withTooltip`, `withFigureCaption`, and `withErrorBoundary` higher-order components

### Changed

- Upgraded Storybook to v10.3.5 and updated npm dependencies
- Upgraded TypeScript to v6

## [4.0.3] - 2026-03-13

### Fixed

- Biome lint errors

### Changed

- Upgraded Storybook to v.10.2.19
- Updated npm dependencies
- Updated CSS color variables for the dark mode

## [4.0.2] - 2026-03-12

### Fixed

- Fixed auto close behavior for Alert component

### Changed

- Updated config file for Stryker and Vite

### Added

- Added new tests for hooks

## [4.0.1] - 2026-03-04

### Fixed

- Fixed auto closing behavior for Alert component
- Update Mutation testing workflow to Send mutation report to Stryker dashboard
- Added Mutation Testing badge to README file

## [4.0.0] - 2026-02-28

### Added

- New CSS variables documentation page (`Variables.mdx`) with complete reference for theming
- Comprehensive CSS variable system for colors, typography, spacing, sizing, and z-index values
- Support for dynamic theme switching using CSS variables

### Changed

- **BREAKING**: Replaced SASS with pure CSS in all components for better performance and smaller bundle size
- Refactored all component styles to use CSS variables for consistent theming
- Updated all component styles to follow the new CSS variable naming conventions
- Improved theme support with centralized CSS variables in `main.css`
- Updated documentation with detailed styling guide and CSS variables reference
- Optimized build script and output build size
- Upgraded Storybook to latest version
- Upgraded all npm dependencies to latest compatible versions

### Removed

- All SASS/SCSS files and dependencies
- Legacy CSS-in-JS patterns

## [3.7.3] - 2026-01-25

### Added

- a11ty plugin for Storybook accessibility testing
- added Stryker configuration for mutation testing
- added mutation testing workflow for GitHub actions

### Changed

- Updated `TextInput` component to filter out incorrect props from DOM
- Updated `NumericInput` component to filter out incorrect props from DOM

### Fixed

- Fixed auto-close functionality for Alert component


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