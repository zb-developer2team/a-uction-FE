import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import TextLink from '../../../../components/TextLink/TextLink';

export interface SignUpFormProps {
  className?: string;
}

export default function SignUpForm({ className, ...props }: SignUpFormProps) {
  // onClick 이벤트를 적용해야해서, 해당 state 관리는 우선 임시로 작성하였습니다!
  const [buttonIsActive, setButtonState] = useState(true);

  function clickHandler() {
    setButtonState(false);
  }

  return (
    <form className="flex-col justify-center">
      <div className="relative">
        <label className={twMerge('sr-only')}>이메일</label>
        <Input
          type={'text'}
          placeholder={'email'}
          imageType={'email'}
          className="mb-10"
        />
        <Button
          type={'disabled'}
          label={'중복체크'}
          size={'xsmall'}
          className="text-sm absolute right-[10px] top-[10px]"
          onClick={clickHandler}
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
          className="mb-10"
        />
      </div>
      <div>
        <label className={twMerge('sr-only')}>비밀번호 확인</label>
        <Input
          type={'text'}
          placeholder={'passwordCheck'}
          imageType={'password'}
          maxLength={12}
          minLength={6}
          className="mb-10"
        />
      </div>
      <div>
        <label className={twMerge('sr-only')}>비밀번호 확인</label>
        <Input
          type={'text'}
          placeholder={'name'}
          imageType={'name'}
          className="mb-10"
        />
      </div>
      <div className="relative">
        <label className={twMerge('sr-only')}>전화번호</label>
        <Input
          type={'text'}
          placeholder={'number'}
          imageType={'number'}
          className="mb-[50px]"
        />
        <Button
          type={'disabled'}
          label={'인증하기'}
          size={'xsmall'}
          className="text-sm absolute right-[10px] top-[10px]"
          onClick={clickHandler}
        />
      </div>
      <Button
        type={'disabled'}
        label={'회원가입'}
        size={'medium'}
        onClick={clickHandler}
        className={twMerge('mx-auto my-0')}
      />
      <TextLink
        url={'/'} //페이지 연결 전 임의로 주소 설정하였습니다.
        type={'logIn'}
        className={twMerge('text-center mt-5 mb-10 mx-auto')}
      />
    </form>
  );
}
