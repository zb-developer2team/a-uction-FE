import type { Meta, StoryFn } from '@storybook/react';

import PaymentPage from './PaymentPage';

const meta = {
  component: PaymentPage,
  title: 'pages/PaymentPage',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof PaymentPage>;

export default meta;

const Template: StoryFn<typeof PaymentPage> = (args) => (
  <PaymentPage {...args} />
);

export const Default = Template.bind({});

Default.args = {};
