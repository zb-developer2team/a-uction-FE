import { twMerge } from 'tailwind-merge';
import { useCallback, useEffect, useState } from 'react';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import TextLink from '../../../../components/TextLink/TextLink';
import { useSignup } from '../../../../hook/useSignUp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export interface SignUpFormProps {
  className?: string;
}

export default function SignUpForm({ className, ...props }: SignUpFormProps) {
  // onClick 이벤트를 적용해야해서, 해당 state 관리는 우선 임시로 작성하였습니다!=
  const [buttonIsActive, setButtonState] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [nickname, setNickname] = useState('');
  const [number, setNumber] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [nicknameMsg, setNicknameMsg] = useState('');
  const [numberMsg, setNumberMsg] = useState('');

  const [checkMail, setCheckMail] = useState(false);

  const navigate = useNavigate();

  function clickHandler() {
    setButtonState(false);
  }

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

  const validateNickname = (nickname: string) => {
    return nickname.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/);
  };

  const validateNumber = (number: string) => {
    return number.match(/^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/);
  };

  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);
  const isConfirmPwd = password === confirmPwd;
  const isNicknameValid = validateNickname(nickname);
  const isNumberValid = validateNumber(number);

  const isAllValid =
    isEmailValid &&
    isPwdValid &&
    isConfirmPwd &&
    isNicknameValid &&
    isNumberValid;

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

  const onChangeConfirmPwd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentConfirmPassword = e.target.value;
      setConfirmPwd(currentConfirmPassword);

      if (currentConfirmPassword !== password) {
        setConfirmPasswordMsg('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmPasswordMsg('');
      }
    },
    [password]
  );

  const onChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentNickname = e.target.value;
      setNickname(currentNickname);

      if (!validateNickname(currentNickname)) {
        setNicknameMsg('한글 또는 영문으로 입력해주세요.');
      } else {
        setNicknameMsg('');
      }
    },
    []
  );

  const onChangeNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentNumber = e.target.value;
      setNumber(currentNumber);

      if (!validateNumber(currentNumber)) {
        setNumberMsg('숫자만 입력해주세요.');
      } else {
        setNumberMsg('');
      }
    },
    []
  );

  const { signupHandler, isLoading, isSuccess } = useSignup({
    userEmail: email,
    password: password,
    username: nickname,
    phoneNumber: number,
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
  }, [isSuccess]);

  // if (isLoading) {
  //   return <div>Loading to signup ...</div>;
  // }

  const checkEmail = async () => {
    try {
      const result = await axios
        .post(`https://dev2team-server.site/register/emailCheck`, { email })
        .then((response) => response.data);
      console.log(result.message === '');
      console.log(result.message);
      console.log(!checkMail);
      setCheckMail(result.message);
      {
        !result.message
          ? setEmailMsg('')
          : setEmailMsg('이미 존재하는 이메일입니다.');
      }
    } catch (err) {
      console.error(err);
      console.log('실패');
    }
  };

  return (
    <form className="flex-col justify-center">
      <div className="relative">
        <label className={twMerge('sr-only')}>이메일</label>
        <Input
          type={'text'}
          placeholder={'email'}
          imageType={'email'}
          className="mb-[50px]"
          onChange={onChangeEmail}
        />
        {!checkMail ? (
          <Button
            type={'disabled'}
            label={'확인완료'}
            size={'xsmall'}
            className="text-sm absolute right-[10px] top-[10px]"
            onClick={checkEmail}
          />
        ) : (
          <Button
            type={!isEmailValid ? 'disabled' : 'active'}
            label={'중복체크'}
            size={'xsmall'}
            className="text-sm absolute right-[10px] top-[10px]"
            onClick={checkEmail}
          />
        )}
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
        <p className={twMerge('mt-[5px] mb-5 pl-5 text-Red absolute bottom-0')}>
          {passwordMsg}
        </p>
      </div>
      <div className="relative">
        <label className={twMerge('sr-only')}>비밀번호 확인</label>
        <Input
          type={'password'}
          placeholder={'passwordCheck'}
          imageType={'password'}
          maxLength={12}
          minLength={6}
          className="mb-[50px]"
          onChange={onChangeConfirmPwd}
        />
        <p className={twMerge('mt-[5px] mb-5 pl-5 text-Red absolute bottom-0')}>
          {confirmPasswordMsg}
        </p>
      </div>
      <div className="relative">
        <label className={twMerge('sr-only')}>닉네임</label>
        <Input
          type={'text'}
          placeholder={'name'}
          imageType={'name'}
          className="mb-[50px]"
          onChange={onChangeNickname}
        />
        <p className={twMerge('mt-[5px] mb-5 pl-5 text-Red absolute bottom-0')}>
          {nicknameMsg}
        </p>
      </div>
      <div className="relative">
        <label className={twMerge('sr-only')}>전화번호</label>
        <Input
          type={'text'}
          placeholder={'number'}
          imageType={'number'}
          className="mb-[50px]"
          onChange={onChangeNumber}
        />
        <Button
          type={!isNumberValid ? 'disabled' : 'active'}
          label={'인증하기'}
          size={'xsmall'}
          className="text-sm absolute right-[10px] top-[10px]"
          onClick={clickHandler}
        />
        <p className={twMerge('mt-[5px] mb-5 pl-5 text-Red absolute bottom-0')}>
          {numberMsg}
        </p>
      </div>
      <Button
        type={!isAllValid ? 'disabled' : 'active'}
        label={'회원가입'}
        size={'medium'}
        onClick={signupHandler}
        className={twMerge('mx-auto my-0')}
      />
      <TextLink
        url="/login" //페이지 연결 전 임의로 주소 설정하였습니다.
        type={'logIn'}
        className={twMerge('text-center mt-5 mb-10 mx-auto')}
      />
    </form>
  );
}
