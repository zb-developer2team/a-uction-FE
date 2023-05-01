import type { Meta, StoryFn } from '@storybook/react';
import Purchased from './Purchased';

const meta = {
  component: Purchased,
  title: 'pages/Purchased',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Purchased>;

export default meta;

const Template: StoryFn<typeof Purchased> = (args) => <Purchased {...args} />;

export const Default = Template.bind({});
Default.args = {};
