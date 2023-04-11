import type { Meta, StoryFn } from '@storybook/react';

import ImageButton from './ImageButton';

const meta = {
  component: ImageButton,
  title: 'components/ImageButton',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ImageButton>;

export default meta;

const Template: StoryFn<typeof ImageButton> = (args) => (
  <ImageButton {...args} />
);

export const BasicImageButton = Template.bind({});
BasicImageButton.args = {
  type: 'empty',
};
