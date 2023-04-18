import type { Meta, StoryFn } from '@storybook/react';
import ProductStartPrice from './ProductStartPrice';

const meta = {
  component: ProductStartPrice,
  title: 'components/ProductStartPrice',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductStartPrice>;

export default meta;

const Template: StoryFn<typeof ProductStartPrice> = (args) => (
  <ProductStartPrice {...args} />
);

export const Default = Template.bind({});
Default.args = {};
