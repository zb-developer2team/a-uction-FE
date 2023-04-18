import type { Meta, StoryFn } from '@storybook/react';
import MinBeedingPrice from './MinBeedingPrice';

const meta = {
  component: MinBeedingPrice,
  title: 'components/MinBeedingPrice',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof MinBeedingPrice>;

export default meta;

const Template: StoryFn<typeof MinBeedingPrice> = (args) => (
  <MinBeedingPrice {...args} />
);

export const Default = Template.bind({});
Default.args = {};
