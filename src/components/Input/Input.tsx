import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';
import { useState } from 'react';

export interface InputProps {
  type: 'text' | 'search' | 'password';
  placeholder:
    | 'email'
    | 'password'
    | 'passwordCheck'
    | 'name'
    | 'number'
    | 'searchProduct'
    | 'productName'
    | 'startPrice'
    | 'bidding'
    | 'info';
  imageType: 'email' | 'password' | 'name' | 'number' | 'none';
  maxLength?: number;
  minLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  type,
  placeholder,
  imageType,
  onChange,
  className,
  ...props
}: InputProps) {
  const inputType = {
    text: 'text',
    search: 'search',
    password: 'password',
  };

  const [input, setInput] = useState('');
  const form = {
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
    passwordCheck: '비밀번호를 다시 한 번 입력해주세요',
    name: '이름을 입력해주세요',
    number: '전화번호를 입력해주세요',
    searchProduct: '찾으시는 물품을 검색해보세요',
    productName: '물품 이름을 입력해주세요',
    startPrice: '시작가를 입력해주세요',
    bidding: '최소 응찰가격을 입력해주세요.',
    info: '상품에 대해 간단하게 설명해주세요.',
  };

  const image = {
    email: `${import.meta.env.VITE_IMAGE_PATH}/mail.png`,
    password: `${import.meta.env.VITE_IMAGE_PATH}/lock.png`,
    name: `${import.meta.env.VITE_IMAGE_PATH}/name.png`,
    number: `${import.meta.env.VITE_IMAGE_PATH}/smartphone-call.png`,
    none: '',
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div className="relative">
      <input
        type={`${inputType[type]}`}
        placeholder={`${form[placeholder]}`}
        className={twMerge(
          'w-[360px] h-[50px] text-base border-b-2 border-Gray pl-[50px] focus:border-Orange outline-none font-line-seed-sans-kr',
          className
        )}
        onChange={inputHandler}
      />
      {`${image[imageType]}` === '' ? (
        ''
      ) : (
        <Image
          src={`${image[imageType]}`}
          alt={`${image[imageType]} 이미지입니다.`}
          className={twMerge(
            'w-[30px] h-[30px] bg-transparent absolute top-[5px] left-[5px]'
          )}
        />
      )}
    </div>
  );
}
