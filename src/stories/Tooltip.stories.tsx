import { Meta, Story } from '@storybook/react/types-6-0';
import { Tooltip, TooltipProps } from '../../src/components/Tooltip';

export default {
  title: 'Example/Tooltip',
  component: Tooltip
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

const props = {
  content: 'Tooltip Content',
  children: 'Tooltip Trigger'
};

export const PositionTop = Template.bind({});
PositionTop.args = {
  position: 'top',
  ...props
};

export const PositionRight = Template.bind({});
PositionRight.args = {
  position: 'right',
  ...props
};

export const PositionBottom = Template.bind({});
PositionBottom.args = {
  position: 'bottom',
  ...props
};

export const PositionLeft = Template.bind({});
PositionLeft.args = {
  position: 'left',
  ...props
};
