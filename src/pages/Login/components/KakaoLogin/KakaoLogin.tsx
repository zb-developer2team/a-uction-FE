import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Button from '../../../../components/Button/Button';
import React from 'react';

export interface KakaoLoginProps {
  className?: string;
}

export default function KakaoLogin({ className, ...props }: KakaoLoginProps) {
  const [buttonIsActive, setButtonState] = useState(true);

  function clickHandler() {
    setButtonState(false);
  }

  return (
    <>
      <p
        className={twMerge(
          'text-center mt-10 mb-5 mx-auto text-Gray text-sm' //카카오 로그인은 카카오에서 요구하는 조건이 있기 때문에 추후 수정해야합니다!
        )}
      >
        카카오 계정으로 간편하게 로그인
      </p>
      <Button
        type={'active'}
        label={'카카오로 시작하기'}
        size={'medium'}
        onClick={clickHandler}
        className={twMerge('mx-auto my-0 bg-Yellow text-DarkGray')}
      />
    </>
  );
}
