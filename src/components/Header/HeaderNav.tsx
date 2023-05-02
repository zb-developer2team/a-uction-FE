import React from 'react';
import { NavLink } from 'react-router-dom';
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
    guest: ['홈', '진행 중인 경매', '예정 경매', '지난 경매', '경매 안내'],
    member: [
      '홈',
      '진행 중인 경매',
      '예정 경매',
      '지난 경매',
      '경매 안내',
      '마이페이지',
      '물품 등록',
    ],
  };

  const activeStyle = {
    color: '#de6b5a',
  };

  return (
    <ul
      className={twMerge(
        `flex justify-around h-[60px] items-center font-line-seed-sans-kr shadow-md`,
        className
      )}
      {...props}
    >
      <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to="/">
        홈
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to="/progression"
      >
        진행 중인 경매
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to="/upcoming"
      >
        예정 경매
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to="/result"
      >
        지난 경매
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to="/information"
      >
        경매 안내
      </NavLink>
      {type === 'member' ? (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to="/mypage"
        >
          마이페이지
        </NavLink>
      ) : (
        ''
      )}
      {type === 'member' ? (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to="/regist"
        >
          물품 등록
        </NavLink>
      ) : (
        ''
      )}
    </ul>
  );
}
