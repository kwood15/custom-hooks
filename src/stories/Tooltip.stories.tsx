import { Meta } from '@storybook/react/types-6-0';
import { Tooltip } from '../../src/components/Tooltip';

export default {
  title: 'Example/Tooltip',
  component: Tooltip
} as Meta;

export const PositionTop = () => (
  <Tooltip position="top" content="Tooltip Top Content">
    Tooltip Top Trigger
  </Tooltip>
);

export const PositionRight = () => (
  <Tooltip position="right" content="Tooltip Right Content">
    Tooltip Right Trigger
  </Tooltip>
);

export const PositionBottom = () => (
  <Tooltip position="bottom" content="Tooltip Bottom Content">
    Tooltip Bottom Trigger
  </Tooltip>
);

export const PositionLeft = () => (
  <Tooltip position="left" content="Tooltip Left Content">
    Tooltip Left Trigger
  </Tooltip>
);
