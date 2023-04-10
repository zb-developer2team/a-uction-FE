import { twMerge } from 'tailwind-merge';

export interface InputProps {
  type: 'text' | 'search';
  placeholder:
    | 'email'
    | 'password'
    | 'passwordCheck'
    | 'name'
    | 'number'
    | 'searchProduct'
    | 'productName';
  maxLength?: number;
  minLength?: number;
  className?: string;
}

export default function Input({
  type,
  placeholder,
  className,
  ...props
}: InputProps) {
  const inputType = {
    text: 'text',
    search: 'search',
  };

  const form = {
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
    passwordCheck: '비밀번호를 다시 한 번 입력해주세요',
    name: '이름을 입력해주세요',
    number: '전화번호를 입력해주세요',
    searchProduct: '찾으시는 물품을 검색해보세요',
    productName: '물품 이름을 입력해주세요',
  };

  return (
    <input
      type={`${inputType[type]}`}
      placeholder={`${form[placeholder]}`}
      className={twMerge(
        'w-[360px] h-[50px] text-base border-b-2 border-Gray px-2 focus:border-Orange outline-none font-line-seed-sans-kr',
        className
      )}
      {...props}
    />
  );
}
