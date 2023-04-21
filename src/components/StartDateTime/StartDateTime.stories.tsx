import type { Meta, StoryFn } from '@storybook/react';
import StartDateTime from './StartDateTime';

const meta = {
  component: StartDateTime,
  title: 'components/StartDateTime',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof StartDateTime>;

export default meta;

const Template: StoryFn<typeof StartDateTime> = (args) => (
  <StartDateTime {...args} />
);

export const Default = Template.bind({});
Default.args = {};
