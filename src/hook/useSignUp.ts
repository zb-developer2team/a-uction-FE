import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { SignUpProps } from '../api/SignUpInfo/user';
import axios from 'axios';

export const signUp = async ({
  userEmail,
  username,
  password,
  phoneNumber,
}: SignUpProps) => {
  const url = `http://3.35.38.11:8081/register`;
  const res = await axios.post(
    url,
    {
      userEmail,
      username,
      password,
      phoneNumber,
    },
    { withCredentials: true }
  );
  console.log(res.data);
  return res.data;
};

export const useSignup = (props: SignUpProps) => {
  const navigate = useNavigate();

  const {
    mutate: signup,
    data,
    isLoading,
    isSuccess,
  } = useMutation(signUp, {
    onSuccess: () => {
      console.log(data);
      navigate({
        pathname: '/login',
      });
    },
    onError: (e) => {
      console.log(e);
      console.log(props);
    },
  });
  const signupHandler = () => {
    signup(props);
  };
  return { signupHandler, data, isLoading, isSuccess };
};
