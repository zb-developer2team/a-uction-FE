import type { Meta, StoryFn } from '@storybook/react';

import SignUp from './SignUp';

const meta = {
  component: SignUp,
  title: 'pages/SignUp',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof SignUp>;

export default meta;

const Template: StoryFn<typeof SignUp> = (args) => <SignUp {...args} />;

export const Default = Template.bind({});

Default.args = {};
