import { twMerge } from 'tailwind-merge';
import SampleImage from '../../assets/SampleImage.png';
import User from '../../assets/user.png';
import Icon from '../Icon/Icon';

export interface ImageButtonProps {
  src: string;
  type: 'empty' | 'image';
  className?: string;
}

export default function ImageButton({
  src,
  type,
  className,
  ...props
}: ImageButtonProps) {
  const imageState = {
    empty: User,
    image: SampleImage,
  };

  return (
    <div>
      {type === 'image' ? (
        <img
          src={SampleImage}
          className={twMerge('w-[30px] h-[30px] rounded-full')}
        />
      ) : (
        <div
          className={twMerge(
            'w-[30px] h-[30px] bg-White border-Orange border-[1px] rounded-full '
          )}
        >
          <Icon
            type="user"
            className={twMerge('w-[20px] h-[20px] mx-auto my-1')}
          />
        </div>
      )}
    </div>
  );
}
