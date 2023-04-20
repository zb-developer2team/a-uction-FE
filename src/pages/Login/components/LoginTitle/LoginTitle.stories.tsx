import type { Meta, StoryFn } from '@storybook/react';

import LoginTitle from './LoginTitle';

const meta = {
  component: LoginTitle,
  title: 'components/LoginTitle',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof LoginTitle>;

export default meta;

const Template: StoryFn<typeof LoginTitle> = (args) => <LoginTitle {...args} />;

export const Default = Template.bind({});

Default.args = {};
