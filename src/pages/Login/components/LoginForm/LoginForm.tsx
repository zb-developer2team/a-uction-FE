import { twMerge } from 'tailwind-merge';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import TextLink from '../../../../components/TextLink/TextLink';
import React from 'react';
import axios from 'axios';
import { useLogin } from '../../../../hook/useLogin';

export interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className, ...props }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      );
  };

  const validatePwd = (password: string) => {
    return password.toLowerCase().match(/^[a-z|A-Z|0-9|]{6,12}$/);
  };

  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);

  const isAllValid = isEmailValid && isPwdValid;

  const onChangeEmail = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentEmail = e.target.value;

      setEmail(currentEmail);

      if (!validateEmail(currentEmail)) {
        setEmailMsg('이메일 형식으로 입력해주세요.');
      } else {
        setEmailMsg('');
      }
    },
    []
  );

  const onChangePwd = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.target.value;

    setPassword(currentPassword);

    if (!validatePwd(currentPassword)) {
      setPasswordMsg('6~12자리 영문과 숫자를 입력해주세요.');
    } else {
      setPasswordMsg('');
    }
  }, []);

  const { LoginHandler, isSuccess } = useLogin({
    userEmail: email,
    password: password,
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess]);

  console.log(axios.defaults.headers.common['Authorization']);

  return (
    <form className="flex-col justify-center border-b-2 border-LightGray">
      <div className="relative">
        <label className={twMerge('sr-only')}>이메일</label>
        <Input
          type={'text'}
          placeholder={'email'}
          imageType={'email'}
          className="mb-[50px]"
          onChange={onChangeEmail}
        />
        <p className={twMerge('mt-[5px] mb-5 pl-5 text-Red absolute bottom-0')}>
          {emailMsg}
        </p>
      </div>
      <div className="relative">
        <label className={twMerge('sr-only')}>비밀번호</label>
        <Input
          type={'password'}
          placeholder={'password'}
          imageType={'password'}
          maxLength={12}
          minLength={6}
          className="mb-[50px]"
          onChange={onChangePwd}
        />
        <p className="mt-[5px] mb-5 pl-5 text-Red absolute bottom-0">
          {passwordMsg}
        </p>
      </div>
      <Link to="/">
        <Button
          type={!isAllValid ? 'disabled' : 'active'}
          label={'로그인'}
          size={'medium'}
          onClick={LoginHandler}
          className={twMerge('mx-auto my-0')}
        />
      </Link>

      <TextLink
        url="/signup" //페이지 연결 전 임의로 주소 설정하였습니다.
        type={'signUp'}
        className={twMerge('text-center mt-5 mb-10 mx-auto')}
      />
    </form>
  );
}
