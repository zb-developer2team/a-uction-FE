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
  imageType: 'email',
};

export const Name = Template.bind({});
Name.args = {
  type: 'text',
  placeholder: 'name',
  imageType: 'name',
};

export const Number = Template.bind({});
Number.args = {
  type: 'text',
  placeholder: 'number',
  imageType: 'number',
};

export const Password: StoryFn<typeof Input> = (args) => (
  <Input maxLength={12} minLength={6} {...args} />
);

Password.args = {
  type: 'text',
  placeholder: 'password',
  imageType: 'password',
};

export const PasswordCheck = Password.bind({});
PasswordCheck.args = {
  type: 'text',
  placeholder: 'passwordCheck',
  imageType: 'password',
};

const Search: StoryFn<typeof Input> = (args) => (
  <Input className="border-2 rounded-lg pl-[10px]" {...args} />
);

export const SearchProduct = Search.bind({});
SearchProduct.args = {
  type: 'search',
  placeholder: 'searchProduct',
  imageType: 'none',
};

const ProductInfo: StoryFn<typeof Input> = (args) => (
  <Input className="border-2 rounded-lg pl-[10px]" {...args} />
);

export const Info = ProductInfo.bind({});
Info.args = {
  type: 'search',
  placeholder: 'searchProduct',
  imageType: 'none',
};

export const ProductName: StoryFn<typeof Input> = (args) => (
  <Input className="border-2 rounded-lg pl-[10px]" {...args} />
);

ProductName.args = {
  type: 'text',
  placeholder: 'productName',
  imageType: 'none',
};

const Price: StoryFn<typeof Input> = (args) => (
  <div className="flex items-center">
    <Input className="w-[300px] border-2 rounded-lg pl-[10px]" {...args} />{' '}
    <span className="font-line-seed-sans-kr text-lg ml-[10px]">원</span>
  </div>
);

export const StartPrice = Price.bind({});
StartPrice.args = {
  type: 'text',
  placeholder: 'startPrice',
  imageType: 'none',
};

export const Bidding = Price.bind({});
Bidding.args = {
  type: 'text',
  placeholder: 'bidding',
  imageType: 'none',
};
