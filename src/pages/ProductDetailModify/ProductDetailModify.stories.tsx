import type { Meta, StoryFn } from '@storybook/react';
import ProductDetailModify from './ProductDetailModify';

const meta = {
  component: ProductDetailModify,
  title: 'components/ProductDetailModify',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductDetailModify>;

export default meta;

const Template: StoryFn<typeof ProductDetailModify> = (args) => (
  <ProductDetailModify {...args} />
);

export const Default = Template.bind({});
Default.args = {};
