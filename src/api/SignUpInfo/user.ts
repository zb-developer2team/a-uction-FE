import axios from 'axios';

export interface SignUpProps {
  userEmail: string;
  password: number | string;
  username: string;
  phoneNumber: number | string;
}

export interface ResponseAuth {
  userEmail: string;
  username: string;
}

export const mutateSignUp = async ({
  userEmail,
  username,
  password,
  phoneNumber,
}: SignUpProps) => {
  const url = `/register`;
  const res = await axios.post<ResponseAuth>(
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
