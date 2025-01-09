import { Meta, StoryObj } from '../../../../storybook/react';
import { default as GridExample } from './Grid.example.tsx';

declare const meta: Meta<typeof GridExample>;
export default meta;
type Story = StoryObj<typeof GridExample>;
export declare const DefaultGrid: Story;
export declare const SelectableGrid: Story;
