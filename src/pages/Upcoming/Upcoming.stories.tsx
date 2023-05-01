import type { Meta, StoryFn } from '@storybook/react';
import Upcoming from './Upcoming';

const meta = {
  component: Upcoming,
  title: 'pages/Upcoming',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Upcoming>;

export default meta;

const Template: StoryFn<typeof Upcoming> = (args) => <Upcoming {...args} />;

export const Default = Template.bind({});
Default.args = {};
