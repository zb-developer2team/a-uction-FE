import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Image/Image';

export interface SignUpTitleProps {
  className?: string;
}

export default function SignUpTitle({ className, ...props }: SignUpTitleProps) {
  return (
    <>
      <Link to="/">
        <Image
          src={'/src/assets/auction.png'}
          alt={'A+uction 로고입니다.'}
          className={twMerge(
            'w-20 h-20 bg-transparent mx-auto absolute top-5 left-5'
          )}
        />
      </Link>
      <h1
        className={twMerge(
          'w-full text-4xl font-bold mt-[10px] mb-[30px] text-center'
        )}
      >
        회원가입
      </h1>
    </>
  );
}
