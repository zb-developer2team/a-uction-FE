import { twMerge } from 'tailwind-merge';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import Banner from '../../assets/Banner.png';
import React from 'react';

export interface MainPageProps {
  children?: string;
  className?: string;
}

export default function MainPage({ children, className }: MainPageProps) {
  return (
    <div className={twMerge(`w-screen font-line-seed-sans-kr`)}>
      <Header type={'guest'} />
      <div className={twMerge(`w-full h-[450px] overflow-hidden`)}>
        <div
          className={twMerge(
            `w-[2560px] h-[450px] absolute left-1/2 -translate-x-1/2`
          )}
        >
          <img src={Banner} className={twMerge(`h-[450px] my-0 mx-auto`)} />
        </div>
      </div>
      <div className="text-2xl font-bold mt-20 ml-10">인기 많은 경매 상품</div>
      <div className="mb-[120px]">
        <div className="flex justify-evenly mt-16">
          <Product
            itemName={'아이폰'}
            category={'category'}
            startPrice={'50,000'}
            price={'60,000'}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
