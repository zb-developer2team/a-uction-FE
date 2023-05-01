import type { Meta, StoryFn } from '@storybook/react';
import ProductFix, { ProductFixProps } from './ProductFix';

const meta: Meta<ProductFixProps> = {
  component: ProductFix,
  title: 'pages/ProductFix',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
};

export default meta;

const Template: StoryFn<ProductFixProps> = (args) => (
  <div>
    <ProductFix {...args} />
  </div>
);

export const Fix = Template.bind({});

Fix.args = {};
