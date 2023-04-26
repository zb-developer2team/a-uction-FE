import { twMerge } from 'tailwind-merge';
import { useState, useCallback } from 'react';
import Input from '../../components/Input/Input';

export interface ProductStartPriceProps {
  className?: string;
  onChange?: (currentPrice: number) => void;
}

export default function ProductStartPrice({
  className,
  onChange,
}: ProductStartPriceProps) {
  const [price, setPrice] = useState<number | undefined>();
  const [validateMsg, setValidateMsg] = useState('');

  const validatePrice = (price: string) => {
    return !isNaN(Number(price));
  };

  const isPriceValid = validatePrice(String(price));

  const onChangePrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currentPrice = Number(event.target.value);
      setPrice(currentPrice);

      if (!validatePrice(String(currentPrice))) {
        setValidateMsg('숫자로 입력해 주세요.');
      } else {
        setValidateMsg('');
        onChange && onChange(currentPrice);
      }

      console.log('Input 값이 변경되었습니다:', currentPrice);
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
        <span className="mt-3 pl-8 text-Red">{validateMsg}</span>
      </div>
    </>
  );
}
