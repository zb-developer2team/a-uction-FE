import axios from 'axios';

export interface LoginProps {
  userEmail: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpireTime: number;
}

export const mutateLogin = async ({ userEmail, password }: LoginProps) => {
  const url = `/register`;
  const res = await axios.post<LoginResponse>(
    url,
    {
      userEmail,
      password,
    },
    { withCredentials: true }
  );
  console.log(res.data);
  return res.data;
};
