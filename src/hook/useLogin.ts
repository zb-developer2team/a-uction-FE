import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { LoginProps, LoginResponse } from '../api/LoginInfo/user';

export const login = async ({ userEmail, password }: LoginProps) => {
  const url = `http://3.35.38.11:8081/login`;
  const res = await axios.post<LoginResponse>(url, { userEmail, password });
  return res.data;
};

export const useLogin = (props: LoginProps) => {
  const {
    mutate: signin,
    data,
    isLoading,
    isSuccess,
    isError,
  } = useMutation(login, {
    onSuccess: (res) => {
      console.log(`Response: `, res);
      if (res) {
        if (res.accessToken) {
          console.log(res);
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${res.accessToken}`;
        }
      }
    },
    onError: (error) => {
      console.log(`Use Signin Error: `, error);
    },
  });

  const LoginHandler = () => {
    signin(props);
  };
  return { LoginHandler, data, isLoading, isSuccess, isError };
};
