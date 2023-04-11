import type { Meta, StoryFn } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

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

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const BasicModal = Template.bind({});
BasicModal.args = {
  size: 'small',
};
