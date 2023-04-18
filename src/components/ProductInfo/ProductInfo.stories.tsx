import type { Meta, StoryFn } from '@storybook/react';
import ProductInfo from './ProductInfo';

const meta = {
  component: ProductInfo,
  title: 'components/ProductInfo',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductInfo>;

export default meta;

const Template: StoryFn<typeof ProductInfo> = (args) => (
  <ProductInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {};
