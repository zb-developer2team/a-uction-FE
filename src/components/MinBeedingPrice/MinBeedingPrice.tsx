import { twMerge } from 'tailwind-merge';
import { useState, useCallback } from 'react';
import Input from '../../components/Input/Input';

export interface MinBeedingPriceProps {
  className?: string;
  onChange?: (currentNumber: number) => void;
}

export default function MinBeedingPrice({
  className,
  onChange,
}: MinBeedingPriceProps) {
  const [number, setNumber] = useState('');
  const [numberMsg, setNumberMsg] = useState('');

  const validateNumber = (number: string) => {
    return number.match(/^[0-9]*$/);
  };

  const onChangeNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentNumber = e.target.value;
      setNumber(currentNumber);

      if (!validateNumber(currentNumber)) {
        setNumberMsg('숫자만 입력해주세요.');
      } else {
        setNumberMsg('');
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
        <span className="text-xl font-bold mt-1 mr-10">최소비딩금액</span>
        <Input
          type={'text'}
          placeholder={'bidding'}
          imageType={'none'}
          className="border-2 rounded-lg"
          onChange={onChangeNumber}
        />
        <span className="text-xl mt-1 ml-4">원</span>
        <span className="mt-3 pl-8 text-Red">{numberMsg}</span>
      </div>
    </>
  );
}
