import type { Meta, StoryFn } from '@storybook/react';
import RegisteredProduct from './RegisteredProduct';

const meta = {
  component: RegisteredProduct,
  title: 'components/RegisteredProduct',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof RegisteredProduct>;

export default meta;

const Template: StoryFn<typeof RegisteredProduct> = (args) => (
  <RegisteredProduct {...args} />
);

export const MainProduct = Template.bind({});

MainProduct.args = {
  category: '미술품',
  startingPrice: '50,000',
  price: '60,000',
};
