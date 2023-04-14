import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Button from '../../components/Button/Button';

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
    <div className={twMerge(`h-screen`)}>
      <Header type={'member'} />
      <div className={twMerge(`flex justify-center mt-20`)}>
        <ProductDetail
          category={'미술품'}
          status={'새상품'}
          description={'눈물 머금은 새상품 내놓기'}
          remainTime={'2일 3시간 11분'}
          auctionPeriod={'2023.11.13 ~ 2023.11.15'}
          price={'64,000원'}
          startPrice={'68,000원'}
          className={twMerge(`flex justify-center`)}
        />
      </div>
      <div
        className={twMerge(`w-full h-[300px] flex justify-center ml-56 mt-10`)}
      >
        <Button
          type={'active'}
          size={'xlarge'}
          label={'경매 참여하기'}
          onClick={clickHandler}
          className="w-[480px] bg-Bluegreen hover:bg-White hover:text-Bluegreen hover:border-2 hover:border-Bluegreen text-2xl"
        />
      </div>
    </div>
  );
}
