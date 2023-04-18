import type { Meta, StoryFn } from '@storybook/react';

import ImageRegist from './ImageRegist';

const meta = {
  component: ImageRegist,
  title: 'components/ImageRegist',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ImageRegist>;

export default meta;

const Template: StoryFn<typeof ImageRegist> = (args) => (
  <ImageRegist {...args} />
);

export const Default = Template.bind({});
Default.args = {};
