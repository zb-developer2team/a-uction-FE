import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import ProductFix from '../../pages/ProductFix/ProductFix';

import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export interface ProductDetailModifyProps {
  className?: string;
}

export default function ProductDetailPage({
  className,
}: ProductDetailModifyProps) {
  return (
    <div className={twMerge(`w-screen`)}>
      <Header type={'guest'} />
      <div>
        <ProductDetail />
        <div className={twMerge(`w-[856px] my-0 mx-auto text-right`)}>
          <Link to="/modify">
            <Button
              type={'active'}
              size={'xlarge'}
              label={'경매 수정하기'}
              onClick={() => {
                // clickHandler();
              }}
              className={twMerge(
                'w-[420px] bg-Bluegreen hover:bg-White hover:text-Bluegreen hover:border-2 hover:border-Bluegreen text-2xl'
              )}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
