import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';
import React from 'react';

export interface ProductProps {
  auctionId: string | number;
  itemName: string;
  category: string;
  startingPrice: string;
  price: string;
  className?: string;
  imagesSrc: string[];
}

export default function Product({
  auctionId,
  itemName,
  category,
  startingPrice,
  price,
  className,
  imagesSrc,
}: ProductProps) {
  const imageSrcExists = imagesSrc && imagesSrc.length > 0;
  const firstImageSrc = imageSrcExists ? imagesSrc[0] : '';
  return (
    // <Link to={`/detail/${auctionId}`}>
    <div
      className={twMerge(
        `w-[240px] font-line-seed-sans-kr cursor-pointer`,
        className
      )}
    >
      <Image size={'sm'} src={firstImageSrc} alt={'상품 이미지 입니다.'} />
      <div className="ml-2">
        <h2 className={twMerge(`text-base mt-1 font-bold`)}>{itemName}</h2>
        <p className="text-Gray text-base font-bold">{category}</p>
        <p className="text-base font-bold">시작가 : {startingPrice}원</p>
        <p className="text-base font-bold">
          현재가 : <span className="text-Red">{price}원</span>
        </p>
      </div>
    </div>
    // </Link>
  );
}
