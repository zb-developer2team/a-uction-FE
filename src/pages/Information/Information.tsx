import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export interface InformationProps {
  className?: string;
}

export default function Information({ className }: InformationProps) {
  const [buttonIsActive, setButtonState] = useState(true);

  function clickHandler() {
    setButtonState(false);
  }

  return (
    <div className={twMerge(`w-screen font-line-seed-sans-kr pb-[100px]`)}>
      <Header type={'member'} />
      <div className="flex justify-center text-4xl font-bold mt-[100px] mb-[50px]">
        Notice
      </div>
      <Image
        className={twMerge(
          'w-[200px] h-[200px] bg-transparent mx-auto mt-0 mb-[50px]'
        )}
        src={`${import.meta.env.VITE_IMAGE_PATH}/auction.png`}
        alt={'A+ction logo 입니다.'}
      />
      <p className="w-full px-24 mx-auto mb-10 text-base text-center">
        A+uction의 색깔로 구현한 온라인 경매는 다양한 물품과 합리적인 가격의
        상품을 선보입니다. <br></br>
        생활 용품과 더불어 명품 및 주얼리, 오디오, 디자인가구, 피규어 등 누구나
        쉽게 경매에 참여할 수 있는 라이프스타일 아이템을 선보입니다.
      </p>
      <p className="mx-24 mb-20 text-base text-center">
        A+uction 온라인 경매는 별도의 가입비 없이 홈페이지에서 회원 가입 후
        누구나 참여 가능합니다.<br></br>
        마음껏 둘러보시고, 경매에 참여해보세요! 😉
      </p>
      <Link to="/signup">
        <div className="w-[600px] mx-auto my-0">
          <Button
            className="bg-Orange hover:bg-White hover:text-Orange hover:border-2 hover:border-Orange text-2xl"
            type={'active'}
            label={'회원가입 하러가기'}
            size={'xlarge'}
            onClick={clickHandler}
          />
        </div>
      </Link>
    </div>
  );
}
