import { twMerge } from 'tailwind-merge';
import logo from '../../assets/react.svg';

export interface ImageProps {
  size?: 'sm' | 'lg';
  className?: string;
}

export default function Image({
  size = 'sm',
  className,
  ...props
}: ImageProps) {
  const imageSize = {
    sm: 'w-60 h-60',
    lg: 'w-[396px] h-[396px]',
  };
  return (
    <div className={twMerge(`${imageSize[size]} bg-LightGray`, className)}>
      <img
        src={logo}
        alt={'react logo 이미지입니다.'}
        className={twMerge(`${imageSize[size]} bg-LightGray`, className)}
        {...props}
      />
    </div>
  );
}
