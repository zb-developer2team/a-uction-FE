import { twMerge } from 'tailwind-merge';
import user from '../../assets/user.png';
import lock from '../../assets/lock.png';
import search from '../../assets/search.png';

export interface IconProps {
  width: number;
  height: number;
  color: string;
  type: 'user' | 'lock' | 'search';
  className: string;
}

export default function Icon({
  width,
  height,
  color,
  type,
  className,
  ...props
}: IconProps) {
  const icons = {
    user,
    lock,
    search,
  };

  return (
    <div className={twMerge(className)}>
      <img
        src={icons[type]}
        width={width}
        height={height}
        color={color}
        className={className}
        {...props}
      />
    </div>
  );
}
