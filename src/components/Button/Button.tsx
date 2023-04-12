import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  className?: string;
  label: string;
  type: 'active' | 'disabled';
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  onClick: () => void;
}

export default function Button({
  className,
  label,
  type,
  size,
  onClick,
  ...props
}: ButtonProps) {
  const isDisabled = type === 'disabled';
  const handleClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  const buttonSize = {
    xsmall: 'w-[80px] h-[30px]',
    small: 'w-[120px] h-[50px]',
    medium: 'w-[360px] h-[40px]',
    large: 'w-[280px] h-[80px]',
    xlarge: 'w-[600px] h-[80px]',
  };

  const style = {
    active:
      'font-bold text-base text-White rounded-lg font-line-seed-sans-kr bg-Orange',
    disabled:
      'bg-LightGray text-DarkGray text-base font-bold font-line-seed-sans-kr cursor-not-allowed pointer-events-none rounded-lg ',
  };

  return (
    <button
      className={twMerge(`${buttonSize[size]} ${style[type]}`, className)}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
}
