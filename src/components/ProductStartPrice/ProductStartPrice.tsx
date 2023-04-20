import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Input from '../../components/Input/Input';

export interface ProductStartPriceProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductStartPrice({
  className,
  onChange,
}: ProductStartPriceProps) {
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(event.target.value);
    console.log('Input 값이 변경되었습니다:', event.target.value);
    onChange && onChange(event);
  };
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">시작가</span>
        <Input
          type={'text'}
          placeholder={'startPrice'}
          imageType={'none'}
          className="border-2 rounded-lg"
          onChange={handlePriceChange}
        />

        <span className="text-xl mt-1 ml-4">원</span>
      </div>
    </>
  );
}
