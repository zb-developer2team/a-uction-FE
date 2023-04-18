import type { Meta, StoryFn } from '@storybook/react';
import ProductName from './ProductName';

const meta = {
  component: ProductName,
  title: 'components/ProductName',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductName>;

export default meta;

const Template: StoryFn<typeof ProductName> = (args) => (
  <ProductName {...args} />
);

export const Default = Template.bind({});
Default.args = {};
