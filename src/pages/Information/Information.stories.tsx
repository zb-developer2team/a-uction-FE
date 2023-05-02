import type { Meta, StoryFn } from '@storybook/react';

import Information from './Information';

const meta = {
  component: Information,
  title: 'pages/Information',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Information>;

export default meta;

const Template: StoryFn<typeof Information> = (args) => (
  <Information {...args} />
);

export const Default = Template.bind({});

Default.args = {};
