import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import {
  configureAxe,
  DefaultTerminalReporter,
  getViolations,
  injectAxe,
  reportViolations,
} from 'axe-playwright';

/**
 * Storybook test-runner configuration.
 *
 * Runs the same accessibility checks as the `@storybook/addon-a11y` panel,
 * but headlessly from the CLI, and prints every violation to the console.
 *
 * Run it via the `npm run a11y` script.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);
    const a11yParameter = storyContext.parameters?.a11y;

    // Allow individual stories to opt out via `parameters.a11y.disable = true`.
    if (a11yParameter?.disable) {
      return;
    }

    await configureAxe(page, {
      rules: a11yParameter?.config?.rules,
    });

    const element = a11yParameter?.element ?? '#storybook-root';
    const violations = await getViolations(page, element, a11yParameter?.options);

    if (violations.length > 0) {
      // Log violations for visibility but don't fail the test.
      // This allows CI to pass while a11y issues are addressed incrementally.
      console.warn(
        `[a11y] ${violations.length} accessibility violation(s) in "${storyContext.title} / ${storyContext.name}" (non-blocking)`,
      );
      await reportViolations(
        violations,
        new DefaultTerminalReporter(
          /* detailedReport */ true,
          /* includeHtml */ true,
          /* verbose */ true,
        ),
      );
    }
  },
};

export default config;
