import { twMerge } from 'tailwind-merge';

export interface ImageProps {
  className?: string;
  children?: string;
}

export default function DropdownItem({
  className,
  children,
  ...props
}: ImageProps) {
  return (
    <li
      className={twMerge(
        `bg-White text-center border-b-2 border-solid border-LightGray last:border-none`,
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
}
