import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Button from '../../components/Button/Button';
import React from 'react';

export interface ProductDetailProps {
  className?: string;
}

export default function ProductDetailPage({ className }: ProductDetailProps) {
  const [joinAuction, setJoinAuction] = useState(true);
  //경매 참여하는 상태관리는 임의로 작성하였습니다.

  const clickHandler = () => {
    setJoinAuction(false);
  };

  return (
    <div className={twMerge(`w-screen`)}>
      <Header type={'guest'} />
      <div>
        <ProductDetail />
        <div className={twMerge(`w-[856px] my-0 mx-auto text-right`)}>
          <Button
            type={'active'}
            size={'xlarge'}
            label={'경매 참여하기'}
            onClick={() => {
              clickHandler();
            }}
            className={twMerge(
              'w-[420px] bg-Bluegreen hover:bg-White hover:text-Bluegreen hover:border-2 hover:border-Bluegreen text-2xl'
            )}
          />
        </div>
      </div>
    </div>
  );
}
