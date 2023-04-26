import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

export interface ProductDetailProps {
  className?: string;
}

export default function MyBiddingPage({ className }: ProductDetailProps) {
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
        <ProductDetail className={twMerge('mt-20')} />
        <div className={twMerge(`w-[856px] my-0 mx-auto text-right`)}>
          <Button
            type={'active'}
            size={'xlarge'}
            label={'경매 참여하기'}
            onClick={() => {
              clickModalHandler();
            }}
            className={twMerge(
              'w-[420px] bg-Orange hover:bg-White hover:text-Orange hover:border-2 hover:border-Orange text-2xl'
            )}
          />
        </div>
      </div>
      {isModalOpen === true ? (
        <Modal size={'large'} className={twMerge('z-30')} />
      ) : (
        ''
      )}
    </div>
  );
}
