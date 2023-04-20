import type { Meta, StoryFn } from '@storybook/react';

import SignUpTitle from './SignUpTitle';

const meta = {
  component: SignUpTitle,
  title: 'components/SignUpTitle',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof SignUpTitle>;

export default meta;

const Template: StoryFn<typeof SignUpTitle> = (args) => (
  <SignUpTitle {...args} />
);

export const Default = Template.bind({});

Default.args = {};
