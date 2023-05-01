import type { Meta, StoryFn } from '@storybook/react';
import Result from './Result';

const meta = {
  component: Result,
  title: 'pages/Result',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Result>;

export default meta;

const Template: StoryFn<typeof Result> = (args) => <Result {...args} />;

export const Default = Template.bind({});
Default.args = {};
