import { Meta, StoryObj } from '@storybook/react';
import { default as ButtonExample } from './ButtonExample';

declare const meta: Meta<typeof ButtonExample>;
export default meta;
type Story = StoryObj<typeof ButtonExample>;
export declare const DefaultButton: Story;
export declare const FlatButton: Story;
export declare const IconButton: Story;
