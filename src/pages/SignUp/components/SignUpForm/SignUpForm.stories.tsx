import type { Meta, StoryFn } from '@storybook/react';

import SignUpForm from './SignUpForm';

const meta = {
  component: SignUpForm,
  title: 'components/SignUpForm',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof SignUpForm>;

export default meta;

const Template: StoryFn<typeof SignUpForm> = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
