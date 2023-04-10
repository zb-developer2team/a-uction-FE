import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import SampleImage from '../../assets/SampleImage.png';

const meta = {
  component: Button,
  title: 'components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Button>;

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  type: 'abled',
  size: 'basic',
  color: 'Orange',
};
