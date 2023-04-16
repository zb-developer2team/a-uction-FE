import type { Meta, StoryFn } from '@storybook/react';

import Preparing from './Preparing';

const meta = {
  component: Preparing,
  title: 'pages/Preparing',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Preparing>;

export default meta;

const Template: StoryFn<typeof Preparing> = (args) => <Preparing {...args} />;

export const Default = Template.bind({});

Default.args = {};
