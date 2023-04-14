import type { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';

const meta = {
  component: RadioButton,
  title: 'components/RadioButton',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof RadioButton>;

export default meta;

const Template: StoryFn<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Radio = Template.bind({});
Radio.args = {};
