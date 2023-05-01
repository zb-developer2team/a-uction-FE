import type { Meta, StoryFn } from '@storybook/react';
import Registered from './Registered';

const meta = {
  component: Registered,
  title: 'pages/Registered',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Registered>;

export default meta;

const Template: StoryFn<typeof Registered> = (args) => <Registered {...args} />;

export const Default = Template.bind({});
Default.args = {};
