import { Meta, StoryObj } from '@storybook/react';
import { default as PortalExample } from './Portal.example.tsx';

declare const meta: Meta<typeof PortalExample>;
export default meta;
type Story = StoryObj<typeof PortalExample>;
export declare const Default: Story;
