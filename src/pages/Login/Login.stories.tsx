import type { Meta, StoryFn } from '@storybook/react';

import Login from './Login';

const meta = {
  component: Login,
  title: 'pages/Login',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Login>;

export default meta;

const Template: StoryFn<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});

Default.args = {};
