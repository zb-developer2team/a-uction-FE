import { twMerge } from 'tailwind-merge';
import { useState, useCallback } from 'react';
import Input from '../../components/Input/Input';
import React from 'react';

export interface ProductStartPriceProps {
  className?: string;
  onChange?: (currentNumber: number) => void;
}

export default function ProductStartPrice({
  className,
  onChange,
}: ProductStartPriceProps) {
  const [price, setPrice] = useState('');
  const [priceMsg, setPriceMsg] = useState('');

  const validatePrice = (number: string) => {
    return number.match(/^[0-9]*$/);
  };

  const onChangePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentNumber = e.target.value;
      setPrice(currentNumber);

      if (!validatePrice(currentNumber)) {
        setPriceMsg('숫자만 입력해주세요.');
      } else {
        setPriceMsg('');
        if (typeof onChange === 'function') {
          onChange(Number(currentNumber));
        }
      }
    },
    []
  );

  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">시작가</span>
        <Input
          type={'text'}
          placeholder={'startPrice'}
          imageType={'none'}
          className="border-2 rounded-lg"
          onChange={onChangePrice}
        />

        <span className="text-xl mt-1 ml-4">원</span>
        <span className="mt-3 pl-8 text-Red">{priceMsg}</span>
      </div>
    </>
  );
}
