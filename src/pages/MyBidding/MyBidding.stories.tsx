import type { Meta, StoryFn } from '@storybook/react';

import MyBidding from './MyBidding';

const meta = {
  component: MyBidding,
  title: 'pages/MyBidding',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof MyBidding>;

export default meta;

const Template: StoryFn<typeof MyBidding> = (args) => <MyBidding {...args} />;

export const Default = Template.bind({});

Default.args = {};
