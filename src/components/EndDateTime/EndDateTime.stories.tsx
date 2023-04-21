import type { Meta, StoryFn } from '@storybook/react';
import EndDateTime from './EndDateTime';

const meta = {
  component: EndDateTime,
  title: 'components/EndDateTime',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof EndDateTime>;

export default meta;

const Template: StoryFn<typeof EndDateTime> = (args) => (
  <EndDateTime {...args} />
);

export const Default = Template.bind({});
Default.args = {};
