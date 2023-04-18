import type { Meta, StoryFn } from '@storybook/react';
import ProductStatus from './ProductStatus';

const meta = {
  component: ProductStatus,
  title: 'components/ProductStatus',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductStatus>;

export default meta;

const Template: StoryFn<typeof ProductStatus> = (args) => (
  <ProductStatus {...args} />
);

export const Default = Template.bind({});
Default.args = {};
