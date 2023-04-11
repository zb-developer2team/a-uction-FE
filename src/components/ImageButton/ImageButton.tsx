import { twMerge } from 'tailwind-merge';
import SampleImage from '../../assets/SampleImage.png';

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
    empty: 'w-[30px] h-[30px] border-2 bg-White border-Orange',
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
            'w-[30px] h-[30px] bg-White border-Orange border-[1px] rounded-full'
          )}
        ></div>
      )}
    </div>
  );
}
