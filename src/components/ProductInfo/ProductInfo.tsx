import { twMerge } from 'tailwind-merge';
import Input from '../../components/Input/Input';
import React from 'react';

export interface ProductInfoProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductInfo({ className, onChange }: ProductInfoProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input 값이 변경되었습니다:', event.target.value);
    onChange && onChange(event);
  };
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">설명</span>
        <Input
          type={'search'}
          placeholder={'info'}
          imageType={'none'}
          className="border-2 rounded-lg"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
