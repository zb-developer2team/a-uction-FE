import type { Meta, StoryFn } from '@storybook/react';
import ProductDetailPage from './ProductDetailPage';

const meta = {
  component: ProductDetailPage,
  title: 'pages/ProductDetailPage',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductDetailPage>;

export default meta;

const Template: StoryFn<typeof ProductDetailPage> = (args) => (
  <ProductDetailPage {...args} />
);

export const Default = Template.bind({});

Default.args = {};
