import type { Meta, StoryFn } from '@storybook/react';
import ProductRegist, { ProductRegistProps } from './ProductRegist';

const meta: Meta<ProductRegistProps> = {
  component: ProductRegist,
  title: 'pages/ProductRegist',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
};

export default meta;

const Template: StoryFn<ProductRegistProps> = (args) => (
  <div>
    <ProductRegist {...args} />
  </div>
);

export const Regist = Template.bind({});

Regist.args = {};
