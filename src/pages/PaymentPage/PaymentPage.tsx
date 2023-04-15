import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

export interface PaymentProps {
  className?: string;
}

export default function PaymentPage({ className }: PaymentProps) {
  const [joinAuction, setJoinAuction] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //경매 참여하는 상태관리는 임의로 작성하였습니다.

  const clickHandler = () => {
    setJoinAuction(false);
  };

  const clickModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  console.log(isModalOpen);

  return (
    <div className={twMerge(`w-screen`)}>
      <Header type={'member'} />
      <div>
        <ProductDetail
          category={'미술품'}
          status={'새상품'}
          description={'눈물 머금은 새상품 내놓기'}
          remainTime={'2일 3시간 11분'}
          auctionPeriod={'2023.11.13 ~ 2023.11.15'}
          price={'64,000원'}
          startPrice={'68,000원'}
          type={'member'}
          className={twMerge('mt-20')}
        />
        <div className={twMerge(`w-[856px] my-0 mx-auto text-right`)}>
          <Button
            type={'active'}
            size={'xlarge'}
            label={'결제하기'}
            onClick={() => {
              clickModalHandler();
            }}
            className={twMerge(
              'w-[420px] bg-Red hover:bg-White hover:text-Red hover:border-2 hover:border-Red text-2xl'
            )}
          />
        </div>
      </div>
      {isModalOpen === true ? (
        <Modal size={'small'} className={twMerge('z-30')} />
      ) : (
        ''
      )}
    </div>
  );
}
