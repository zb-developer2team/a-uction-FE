import type { Meta, StoryFn } from '@storybook/react';
import Modal from './Modal';

const meta = {
  component: Modal,
  title: 'components/Modal',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Modal>;

export default meta;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const SmallModal = Template.bind({});
SmallModal.args = {};

export const LargeModal = Template.bind({});
LargeModal.args = {};
