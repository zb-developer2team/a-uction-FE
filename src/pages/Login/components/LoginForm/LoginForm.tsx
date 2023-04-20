import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import TextLink from '../../../../components/TextLink/TextLink';

export interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className, ...props }: LoginFormProps) {
  const [buttonIsActive, setButtonState] = useState(true);

  function clickHandler() {
    setButtonState(false);
  }

  return (
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
  );
}
