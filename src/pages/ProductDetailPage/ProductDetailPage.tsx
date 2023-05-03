import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Button from '../../components/Button/Button';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export interface ProductDetailProps {
  className?: string;
  product?: string;
}

export interface ProductData {
  itemStatus: string;
  auctionId: string | number;
  itemName: string;
  category: string;
  startingPrice: string;
  price: string;
  imagesSrc: string[];
  startDateTime: string;
  endDateTime: string;
  description: string;
}

export default function ProductDetailPage({
  className,
  ...props
}: ProductDetailProps) {
  const [joinAuction, setJoinAuction] = useState(true);
  //경매 참여하는 상태관리는 임의로 작성하였습니다.

  const clickHandler = () => {
    setJoinAuction(false);
  };

  const buttonLabel = joinAuction ? '경매 참여하기' : '경매 참여 완료';

  const { auctionId } = useParams();

  return (
    <div className={twMerge(`w-screen`)}>
      <Header type={'guest'} />
      <div>
        <ProductDetail auctionId={auctionId} />
        <div className={twMerge(`w-[856px] my-0 mx-auto text-right`)}>
          {joinAuction ? (
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
          ) : (
            <div className={twMerge('flex justify-end gap-6')}>
              <Button
                type={'active'}
                size={'large'}
                label={'7,000원'} // 받아온 현재가격 넣을 예정
                onClick={() => {
                  // 응찰하기 버튼 클릭시 동작할 코드 작성
                }}
                className={twMerge(
                  'w-[210px] mt-4 bg-White border-2 border-Gray hover:bg-Gray hover:text-White hover:border-2 hover:Gray text-2xl text-Gray'
                )}
              />
              <Button
                type={'active'}
                size={'large'}
                label={'응찰하기'}
                onClick={() => {
                  // 현재가격 버튼 클릭시 동작할 코드 작성
                }}
                className={twMerge(
                  'w-[210px] mt-4 bg-Bluegreen hover:bg-White hover:text-Bluegreen hover:border-2 hover:border-Bluegreen text-2xl'
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
