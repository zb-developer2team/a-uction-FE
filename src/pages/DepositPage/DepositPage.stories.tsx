import type { Meta, StoryFn } from '@storybook/react';
import DepositPage from './DepositPage';

const meta = {
  component: DepositPage,
  title: 'pages/DepositPage',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof DepositPage>;

export default meta;

const Template: StoryFn<typeof DepositPage> = (args) => (
  <DepositPage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  deposit: '1,000,000',
};
