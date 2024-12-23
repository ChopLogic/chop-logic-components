import { Meta, StoryObj } from '@storybook/react';
import { default as TextInputExample } from './TextInput.example.tsx';

declare const meta: Meta<typeof TextInputExample>;
export default meta;
type Story = StoryObj<typeof TextInputExample>;
export declare const DefaultTextInput: Story;
export declare const PasswordInput: Story;
export declare const EmailInput: Story;
