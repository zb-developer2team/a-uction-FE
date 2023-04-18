import type { Meta, StoryFn } from '@storybook/react';
import ProductTime from './ProductTime';

const meta = {
  component: ProductTime,
  title: 'components/ProductTime',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductTime>;

export default meta;

const Template: StoryFn<typeof ProductTime> = (args) => (
  <ProductTime {...args} />
);

export const Time = Template.bind({
  remainTime: '2일 5시간 22분',
  auctionPeriod: '2023.04.01 10:00 ~ 2023.04.23 14:00',
});
