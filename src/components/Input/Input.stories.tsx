import type { Meta, StoryFn } from '@storybook/react';

import Input from './Input';

const meta = {
  component: Input,
  title: 'components/Input',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Input>;

export default meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: 'text',
  placeholder: 'email',
};

export const Name = Template.bind({});
Name.args = {
  type: 'text',
  placeholder: 'name',
};

export const Number = Template.bind({});
Number.args = {
  type: 'text',
  placeholder: 'number',
};

export const Password: StoryFn<typeof Input> = (args) => (
  <Input maxLength={12} minLength={6} {...args} />
);

Password.args = {
  type: 'text',
  placeholder: 'password',
};

export const PasswordCheck = Password.bind({});
PasswordCheck.args = {
  type: 'text',
  placeholder: 'passwordCheck',
};

const Search: StoryFn<typeof Input> = (args) => (
  <Input className="border-2 rounded-lg" {...args} />
);

export const SearchProduct = Search.bind({});
SearchProduct.args = {
  type: 'search',
  placeholder: 'searchProduct',
};

export const ProductName: StoryFn<typeof Input> = (args) => (
  <Input className="border-2 rounded-lg" {...args} />
);

ProductName.args = {
  type: 'text',
  placeholder: 'productName',
};
