import { twMerge } from 'tailwind-merge';

export interface HeaderNavProps {
  type: 'guest' | 'member';
  className?: string;
}

export default function HeaderNav({
  type,
  className,
  ...props
}: HeaderNavProps) {
  const navigation = {
    guest: ['홈', '진행 중인 경매', '예정 경매', '경매 결과', '경매 안내'],
    member: [
      '홈',
      '진행 중인 경매',
      '예정 경매',
      '경매 결과',
      '경매 안내',
      '마이페이지',
      '물품 등록',
    ],
  };

  return (
    <ul
      className={twMerge(
        `flex justify-around h-[60px] items-center font-line-seed-sans-kr shadow-md`,
        className
      )}
      {...props}
    >
      {navigation[type].map((nav) => (
        <li>{nav}</li>
      ))}
    </ul>
  );
}
