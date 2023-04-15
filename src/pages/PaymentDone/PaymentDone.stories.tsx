import type { Meta, StoryFn } from '@storybook/react';
import PaymentDone from './PaymentDone';

const meta = {
  component: PaymentDone,
  title: 'pages/PaymentDone',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof PaymentDone>;

export default meta;

const Template: StoryFn<typeof PaymentDone> = (args) => (
  <PaymentDone {...args} />
);

export const Default = Template.bind({});
Default.args = {};
