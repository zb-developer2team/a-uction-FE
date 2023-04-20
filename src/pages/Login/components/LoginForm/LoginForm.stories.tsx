import type { Meta, StoryFn } from '@storybook/react';

import LoginForm from './LoginForm';

const meta = {
  component: LoginForm,
  title: 'components/LoginForm',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof LoginForm>;

export default meta;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
