import type { Meta, StoryFn } from '@storybook/react';
import ProductDetail from './ProductDetail';

const meta = {
  component: ProductDetail,
  title: 'components/ProductDetail',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductDetail>;

export default meta;

const Template: StoryFn<typeof ProductDetail> = (args) => (
  <ProductDetail {...args} />
);

export const Detail = Template.bind({});

Detail.args = {};
