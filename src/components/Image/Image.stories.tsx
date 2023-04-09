import type { Meta, StoryFn } from '@storybook/react';
import Image from './Image';

const meta = {
  component: Image,
  title: 'components/Image',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Image>;

export default meta;

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
};
