import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ImageButton from '../ImageButton/ImageButton';
import { Link } from 'react-router-dom';

export interface HeaderTopProps {
  type: 'guest' | 'member';
  className?: string;
}

export default function HeaderTop({
  type,
  className,
  ...props
}: HeaderTopProps) {
  // onClick 이벤트를 적용해야해서, 해당 state 관리는 우선 임시로 작성하였습니다!
  const [buttonIsActive, setButtonState] = useState(true);

  function clickHandler() {
    setButtonState(false);
  }

  return (
    <div
      className={twMerge(
        `flex justify-between font-line-seed-sans-kr px-5 border-b-[1px] border-LightGray`
      )}
      {...props}
    >
      <Link to="/" className={twMerge(`h-[70px] flex items-center gap-5`)}>
        <Image
          className={twMerge('w-10 h-10 bg-transparent')}
          src={`${import.meta.env.VITE_IMAGE_PATH}/auction.png`}
          alt={'A+ction logo 입니다.'}
        />
        <span className={twMerge(`text-2xl font-bold`)}>A+uction</span>
      </Link>
      <div className={twMerge(`flex items-center gap-5 relative`)}>
        <Input
          type={'search'}
          placeholder={'searchProduct'}
          className="border-2 rounded-lg bg-left-top pl-[60px] pr-[10px]"
          imageType={'none'}
        />
        <Image
          src={`${import.meta.env.VITE_IMAGE_PATH}/search.png`}
          alt={'돋보기 이미지 입니다.'}
          className={twMerge(
            'w-[30px] h-[30px] absolute top-[10px] left-[10px] bg-transparent'
          )}
        />
        {type === 'guest' ? (
          <Link to="/login">
            <Button
              type={'active'}
              size={'small'}
              label={'로그인'}
              onClick={clickHandler}
            />
          </Link>
        ) : (
          <Link to="mypage">
            <ImageButton
              type={'image'}
              src={`${import.meta.env.VITE_IMAGE_PATH}/SampleImage.png`}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
