import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeaderExample } from './Header.example';

const meta: Meta<typeof HeaderExample> = {
  title: 'Atoms/Header',
  component: HeaderExample,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeaderExample>;

export const Examples: Story = {};
