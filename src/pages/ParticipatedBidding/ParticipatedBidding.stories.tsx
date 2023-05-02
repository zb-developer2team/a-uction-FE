import type { Meta, StoryFn } from '@storybook/react';

import ParticipatedBidding from './ParticipatedBidding';

const meta = {
  component: ParticipatedBidding,
  title: 'pages/ParticipatedBidding',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ParticipatedBidding>;

export default meta;

const Template: StoryFn<typeof ParticipatedBidding> = (args) => (
  <ParticipatedBidding {...args} />
);

export const Default = Template.bind({});

Default.args = {};
