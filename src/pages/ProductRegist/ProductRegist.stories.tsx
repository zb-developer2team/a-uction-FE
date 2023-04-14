import type { Meta, StoryFn } from '@storybook/react';
import ProductRegist from './ProductRegist';

const meta = {
  component: ProductRegist,
  title: 'pages/ProductRegist',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductRegist>;

export default meta;

const Template: StoryFn<typeof ProductRegist> = (args) => (
  <ProductRegist {...args} />
);

export const Regist = Template.bind({});

Regist.args = {};
