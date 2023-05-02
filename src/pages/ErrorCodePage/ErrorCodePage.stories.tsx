import type { Meta, StoryFn } from '@storybook/react';

import ErrorCodePage from './ErrorCodePage';

const meta = {
  component: ErrorCodePage,
  title: 'pages/ErrorCodePage',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ErrorCodePage>;

export default meta;

const Template: StoryFn<typeof ErrorCodePage> = (args) => (
  <ErrorCodePage {...args} />
);

export const Default = Template.bind({});

Default.args = {};
