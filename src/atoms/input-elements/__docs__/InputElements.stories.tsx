import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputElementsExample } from './InputElements.example';

const meta: Meta<typeof InputElementsExample> = {
  title: 'Atoms/Input Elements',
  component: InputElementsExample,
};

export default meta;

type Story = StoryObj<typeof InputElementsExample>;

export const ElementsGallery: Story = {};
