import { twMerge } from 'tailwind-merge';

export interface DropdownItemProps {
  className?: string;
  children?: string;
  onDropdownClick?: () => void;
}

export default function DropdownItem({
  className,
  children,
  onDropdownClick,
  ...props
}: DropdownItemProps) {
  return (
    <li
      className={twMerge(
        `bg-White text-center border-b-2 border-solid border-LightGray last:border-none cursor-pointer`,
        className
      )}
      onClick={onDropdownClick}
      {...props}
    >
      {children}
    </li>
  );
}
