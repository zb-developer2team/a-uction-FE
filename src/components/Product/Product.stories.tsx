import type { Meta, StoryFn } from '@storybook/react';
import Product from './Product';

const meta = {
  component: Product,
  title: 'components/Product',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Product>;

export default meta;

const Template: StoryFn<typeof Product> = (args) => <Product {...args} />;

export const MainProduct = Template.bind({});

MainProduct.args = {
  category: '미술품',
  startingPrice: '50,000',
  price: '60,000',
};
