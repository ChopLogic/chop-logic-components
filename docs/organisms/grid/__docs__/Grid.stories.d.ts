import { Meta, StoryObj } from '../../../storybook/react-vite';
import { GridExample } from './Grid.example';
declare const meta: Meta<typeof GridExample>;
export default meta;
type Story = StoryObj<typeof GridExample>;
export declare const DefaultGrid: Story;
export declare const SelectableGrid: Story;
