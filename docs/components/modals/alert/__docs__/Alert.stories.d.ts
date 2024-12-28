import { default as React } from '../../../../../node_modules/react';
import { Meta, StoryObj } from '@storybook/react';
import { ChopLogicAlertProps } from '../../../../models';

declare const ExampleComponent: React.FC<ChopLogicAlertProps>;
declare const meta: Meta<typeof ExampleComponent>;
export default meta;
type Story = StoryObj<typeof ExampleComponent>;
export declare const Default: Story;
