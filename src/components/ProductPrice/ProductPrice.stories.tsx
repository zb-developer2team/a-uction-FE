import type { Meta, StoryFn } from '@storybook/react';
import ProductPrice from './ProductPrice';

const meta = {
  component: ProductPrice,
  title: 'components/ProductPrice',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductPrice>;

export default meta;

const Template: StoryFn<typeof ProductPrice> = (args) => (
  <ProductPrice {...args} />
);

export const Price = Template.bind({
  price: '50,000',
  startPrice: '60,000',
});
