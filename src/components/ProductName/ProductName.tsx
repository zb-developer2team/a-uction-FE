import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import React from 'react';

export interface ProductNameProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Name({
  className,
  onChange,
  ...props
}: ProductNameProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input 값이 변경되었습니다:', event.target.value);
    onChange && onChange(event);
  };
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl mt-1 font-bold">상품 이름</span>
        <Input
          type={'search'}
          placeholder={'productName'}
          imageType={'none'}
          className="ml-10"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
