import type { Meta, StoryFn } from '@storybook/react';
import ProductCategory from './ProductCategory';

const meta = {
  component: ProductCategory,
  title: 'components/ProductCategory',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductCategory>;

export default meta;

const Template: StoryFn<typeof ProductCategory> = (args) => (
  <ProductCategory {...args} />
);

export const Default = Template.bind({});
Default.args = {};
