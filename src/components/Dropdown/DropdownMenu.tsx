import { twMerge } from 'tailwind-merge';
import DropdownItem from './DropdownItem';

export interface DropdownProps {
  type: 'product' | 'sort';
  className?: string;
}

export default function DropdownMenu({
  type,
  className,
  ...props
}: DropdownProps) {
  const category = {
    product: ['가구', '가전/디지털', '미술품'],
    sort: ['시작가 높은 순', '시작가 낮은 순', '마감순', '등록일 순'],
  };

  const size = {
    product: 'w-[132px] text-lg',
    sort: 'w-[105px] text-sm',
  };

  const height = {
    product: 'h-[52px] leading-[52px]',
    sort: 'h-9 leading-[36px]',
  };

  return (
    <ul
      className={twMerge(
        `${size[type]} rounded-lg border-2 border-DarkGray overflow-hidden`,
        className
      )}
      {...props}
    >
      {category[type].map((item) => (
        <DropdownItem className={twMerge(`${height[type]}`)}>
          {item}
        </DropdownItem>
      ))}
    </ul>
  );
}
