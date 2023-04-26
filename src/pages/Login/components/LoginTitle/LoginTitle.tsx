import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Image/Image';

export interface LoginTitleProps {
  className?: string;
}

export default function LoginTitle({ className, ...props }: LoginTitleProps) {
  return (
    <>
      <Link to="/">
        <Image
          src={`${import.meta.env.VITE_IMAGE_PATH}/auction.png`}
          alt={'A+uction 로고입니다.'}
          className={twMerge('w-[120px] h-[120px] bg-transparent mx-auto mh-0')}
        />
      </Link>

      <h1
        className={twMerge(
          'w-full text-4xl font-bold mt-[10px] mb-[30px] text-center ml-0'
        )}
      >
        로그인
      </h1>
    </>
  );
}
