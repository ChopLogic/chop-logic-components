import { Meta, StoryObj } from '@storybook/react';

import { default as ButtonExample } from './ButtonExample';

declare const meta: Meta<typeof ButtonExample>;
export default meta;
type Story = StoryObj<typeof ButtonExample>;
export declare const PrimaryButton: Story;
export declare const SecondaryButton: Story;
export declare const DangerButton: Story;
export declare const IconButton: Story;
export declare const DisabledButton: Story;
