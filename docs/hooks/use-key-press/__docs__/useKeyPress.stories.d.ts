import { Meta, StoryObj } from '@storybook/react';

import { default as React } from '../../../../node_modules/react';

declare const ExampleComponent: React.FC;
declare const meta: Meta<typeof ExampleComponent>;
export default meta;
type Story = StoryObj<typeof ExampleComponent>;
export declare const Default: Story;
