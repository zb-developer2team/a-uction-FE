import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';
import Title from '../Title/Title';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import ProductTime from '../ProductTime/ProductTime';
import ProductPrice from '../ProductPrice/ProductPrice';
import React from 'react';

export interface ProductDetailProps {
  children?: string;
  className?: string;
}

export default function ProductDetail({
  children,
  className,
  ...props
}: ProductDetailProps) {
  return (
    <>
      <div
        className={twMerge(
          `flex justify-center font-line-seed-sans-kr`,
          className
        )}
      >
        <div>
          <Image
            size={'lg'}
            src={`${import.meta.env.VITE_IMAGE_PATH}/SampleImage.png`}
            alt={'상품 이미지 입니다.'}
          />
        </div>
        <div className={twMerge(`w-[420px] ml-10`)}>
          <h2 className={twMerge(`border-b-[1px] pb-5`)}>
            <Title />
          </h2>
          <div>
            <CategoryDetail
              category={'category'}
              status={'새상품'}
              description={'새상품이지만 눈물 머금고 내놓기'}
            />
          </div>
          <div>
            <ProductTime
              remainTime={'2일 5시간 22분'}
              auctionPeriod={'2023.04.01 10:00 ~ 2023.04.23 14:00'}
            />
          </div>
          <div>
            <ProductPrice
              price={'5,000'}
              startPrice={'6,000'}
              type={'member'}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
