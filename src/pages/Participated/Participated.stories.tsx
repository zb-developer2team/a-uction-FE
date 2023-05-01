import type { Meta, StoryFn } from '@storybook/react';
import Participated from './Participated';

const meta = {
  component: Participated,
  title: 'pages/Participated',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Participated>;

export default meta;

const Template: StoryFn<typeof Participated> = (args) => (
  <Participated {...args} />
);

export const Default = Template.bind({});
Default.args = {};
