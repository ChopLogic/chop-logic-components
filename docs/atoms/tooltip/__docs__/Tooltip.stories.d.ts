import { Meta, StoryObj } from '../../../storybook/react-vite';
import { TooltipExample } from './Tooltip.example';
declare const meta: Meta<typeof TooltipExample>;
export default meta;
type Story = StoryObj<typeof TooltipExample>;
export declare const VisibleOnHover: Story;
export declare const VisibleOnClick: Story;
export declare const VisibleOnFocus: Story;
export declare const VisibleOnContextMenu: Story;
