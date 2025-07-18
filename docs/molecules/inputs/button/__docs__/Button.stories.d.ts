import { Meta, StoryObj } from '../../../../storybook/react-vite';
import { ChopLogicButtonExample } from './Button.example';
declare const meta: Meta<typeof ChopLogicButtonExample>;
export default meta;
type Story = StoryObj<typeof ChopLogicButtonExample>;
export declare const PrimaryButton: Story;
export declare const SecondaryButton: Story;
export declare const IconButton: Story;
export declare const ButtonWithTooltip: Story;
