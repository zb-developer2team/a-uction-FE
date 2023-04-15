import { twMerge } from 'tailwind-merge';
import Button from '../Button/Button';
import { useState } from 'react';

export interface ModalProps {
  size: 'small' | 'large';
  className?: string;
}

export default function Modal({ size, className, ...props }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const modalSize = {
    small: 'w-[600px] h-[300px]',
    large: 'w-[600px] h-[700px]',
  };

  const handleButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className={twMerge(
            'flex justify-center items-center w-screen h-screen fixed top-0 left-0'
          )}
        >
          <div
            className={twMerge(
              `${modalSize[size]} bg-White opacity-100 rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.5)] z-30`,
              className,
              'flex flex-col justify-center items-center'
            )}
          >
            <span className="text-xl font-line-seed-sans-kr m-6">
              {size === 'small'
                ? '결과는 예치금에서 자동 출금 됩니다.'
                : '입찰현황'}
            </span>
            {size === 'large' && <div className="mt-96" />}
            <Button
              size="small"
              type="active"
              label={size === 'small' ? '확인' : '닫기'}
              onClick={handleButtonClick}
            />
          </div>
          <div className="absolute top-0 left-0 h-full w-full bg-DarkGray opacity-80"></div>
        </div>
      )}
    </>
  );
}
