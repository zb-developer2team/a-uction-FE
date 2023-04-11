import { prependOnceListener } from 'process';
import { twMerge } from 'tailwind-merge';

export interface ModalProps {
  size: 'small' | 'large';
  className: string;
}

export default function Modal({ size, className, ...props }: ModalProps) {
  const modalSize = {
    small: 'w-[600px] h-[300px]',
    large: 'w-[600px] h-[700px]',
  };

  return (
    <div
      className={twMerge(
        `${modalSize[size]} bg-White rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.5)]`,
        className
      )}
    ></div>
  );
}
