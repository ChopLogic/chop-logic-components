import { Meta, StoryObj } from '@storybook/react';

import { default as CheckboxExample } from './CheckboxExample';

declare const meta: Meta<typeof CheckboxExample>;
export default meta;
type Story = StoryObj<typeof CheckboxExample>;
export declare const LeftIconCheckbox: Story;
export declare const RightIconCheckbox: Story;
export declare const NoLabelCheckbox: Story;
