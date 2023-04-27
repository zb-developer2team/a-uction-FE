import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ProductPriceProps {
  price: string;
  startPrice: string;
  type: 'mine' | 'member';
  id?: string;
  className?: string;
}

export default function ProductPrice({
  price,
  startPrice,
  type,
  id,
  className,
}: ProductPriceProps) {
  return (
    <>
      <div className={twMerge(`py-5`)}>
        <p className="text-l mb-2 flex justify-between">
          <span className="mr-6 font-bold">현재가</span>
          <span className="text-Red font-bold">{price}원</span>
        </p>
        <p className="text-l mb-2 flex justify-between">
          <span className="mr-6 font-bold">시작가</span>
          <span>{startPrice}원</span>
        </p>
        {type === 'mine' ? (
          <p className="text-l mb-2 flex justify-between">
            <span className="font-bold">현재 입찰자</span>
            <span className="text-Bluegreen font-bold">{id}</span>
          </p>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
