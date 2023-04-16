import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Image from '../../components/Image/Image';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import TextLink from '../../components/TextLink/TextLink';
import { Link } from 'react-router-dom';

export interface LoginProps {
  className?: string;
}

export default function Login({ className, ...props }: LoginProps) {
  // onClick 이벤트를 적용해야해서, 해당 state 관리는 우선 임시로 작성하였습니다!
  const [buttonIsActive, setButtonState] = useState(true);

  function clickHandler() {
    setButtonState(false);
  }

  return (
    <div
      className={twMerge(
        ` w-screen h-screen font-line-seed-sans-kr flex justify-center items-center`,
        className
      )}
      {...props}
    >
      <div>
        <Link to="/">
          <Image
            src={'/src/assets/auction.png'}
            alt={'A+uction 로고입니다.'}
            className={twMerge(
              'w-[120px] h-[120px] bg-transparent mx-auto mh-0'
            )}
          />
        </Link>

        <h1
          className={twMerge(
            'w-full text-4xl font-bold mt-[10px] mb-[30px] text-center ml-0'
          )}
        >
          로그인
        </h1>
        <form className="flex-col justify-center border-b-2 border-LightGray">
          <div>
            <label className={twMerge('sr-only')}>이메일</label>
            <Input
              type={'text'}
              placeholder={'email'}
              imageType={'email'}
              className="mb-10"
            />
          </div>
          <div>
            <label className={twMerge('sr-only')}>비밀번호</label>
            <Input
              type={'text'}
              placeholder={'password'}
              imageType={'password'}
              maxLength={12}
              minLength={6}
              className="mb-[50px]"
            />
          </div>
          <Link to="/">
            <Button
              type={'active'}
              label={'로그인'}
              size={'medium'}
              onClick={clickHandler}
              className={twMerge('mx-auto my-0')}
            />
          </Link>

          <TextLink
            url={'/'} //페이지 연결 전 임의로 주소 설정하였습니다.
            type={'signUp'}
            className={twMerge('text-center mt-5 mb-10 mx-auto')}
          />
        </form>
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
      </div>
    </div>
  );
}
