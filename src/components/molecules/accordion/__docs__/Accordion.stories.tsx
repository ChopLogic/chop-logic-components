import type { Meta, StoryObj } from '@storybook/react-vite';

import { AccordionExample } from './Accordion.example';

const meta: Meta<typeof AccordionExample> = {
  component: AccordionExample,
  title: 'Molecules/Accordion',
  argTypes: {
    // Content
    items: {
      control: 'object',
      description: 'Array of accordion items with summary and children content',
      table: {
        type: { summary: 'AccordionItemProps[]' },
        category: 'Content',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles to apply to the accordion',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Accessibility
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the breadcrumbs',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    title: {
      control: 'text',
      description: 'Title attribute for the breadcrumbs container',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionExample>;

export const DefaultAccordion: Story = {
  args: {
    items: [
      {
        summary: 'What is Chop Logic?',
        children:
          'Chop Logic Components is a React component library that provides reusable, accessible, and customizable components following the Atomic Design methodology.',
      },
      {
        summary: 'How do I install it?',
        children:
          'You can install Chop Logic Components using npm: npm install chop-logic-components',
      },
      {
        summary: 'Is it accessible?',
        children:
          'Yes, all components in Chop Logic are built with accessibility in mind, including proper ARIA attributes and keyboard navigation support.',
      },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        summary: 'Getting Started',
        children:
          'To get started with Chop Logic, install the package and import the components you need. Check the documentation for detailed examples.',
      },
    ],
  },
};

export const MultipleItems: Story = {
  args: {
    items: [
      {
        summary: 'Features',
        children:
          'Chop Logic provides a comprehensive set of components including atoms, molecules, and organisms for building complex UIs.',
      },
      {
        summary: 'Theming',
        children:
          'Components support dynamic theming with CSS variables and built-in theme modes (light/dark).',
      },
      {
        summary: 'Hooks',
        children:
          'A collection of custom hooks is available to manage component logic and interactions.',
      },
      {
        summary: 'Styling',
        children:
          'All components use BEM CSS with support for responsive design and accessible styling patterns.',
      },
      {
        summary: 'Documentation',
        children:
          'Comprehensive Storybook documentation and examples are available for all components.',
      },
    ],
  },
};
