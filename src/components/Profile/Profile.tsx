import { twMerge } from 'tailwind-merge';
import Button from '../Button/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DepositPage from '../../pages/DepositPage/DepositPage';

import React from 'react';

export interface ProfileProps {
  id: string;
  deposit: string;
  introduce: string;
  className?: string;
}

export default function Profile({
  id,
  deposit,
  introduce,
  className,
}: ProfileProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = () => {
    setIsOpen(false);
  }; //onClick 이벤트의 state는 임시로 작성하였습니다.

  return (
    <div className={twMerge(`w-[460px] font-line-seed-sans-kr`, className)}>
      <div className="text-lg font-bold mb-4">
        <span className="text-Bluegreen mr-4">{id}</span>님
      </div>
      <div className="text-lg font-bold mb-4 flex items-center">
        <span className="text-Bluegreen mr-4">예치금</span>
        <span className="mr-4">{deposit}원</span>
        <Link to="/deposit">
          <Button
            type="active"
            size="xsmall"
            label={'내역보기'}
            onClick={handleButtonClick}
            className="text-sm"
          ></Button>
        </Link>
      </div>
      <div>
        <span className="text-lg font-bold text-Bluegreen mr-4">소개</span>
        <p className="text-base mt-2">{introduce}</p>
      </div>
    </div>
  );
}
