import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

export interface PaymentDoneProps {
  className?: string;
}

export default function PaymentDone({ className }: PaymentDoneProps) {
  const [buttonActive, setButtonActive] = useState(true);

  const clickHandler = () => {
    setButtonActive(false);
  };

  return (
    <div className={twMerge(`w-screen font-line-seed-sans-kr`)}>
      <Header type={'member'} />
      <div className="h-screen flex flex-col text-5xl font-bold justify-center items-center">
        축하합니다~~!!!!
        <Button
          size={'xlarge'}
          label={'홈으로'}
          type={'active'}
          onClick={clickHandler}
          className="mt-8"
        />
      </div>
    </div>
  );
}
