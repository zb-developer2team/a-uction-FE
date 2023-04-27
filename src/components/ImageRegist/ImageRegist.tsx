import axios from 'axios';
import { twMerge } from 'tailwind-merge';
import { useState, useRef } from 'react';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import FormData from 'form-data';
import React from 'react';

interface ImageProps {
  id: number;
  filePath: string;
}
export interface ImageRegistProps {
  className?: string;
  // onImageUploaded: (imageFilePath: string) => void;
  onImageUploaded: (imageFileUrl: string) => void;
}

export default function ImageRegist({
  className,
  onImageUploaded,
}: ImageRegistProps): JSX.Element {
  const [buttonActive, setButtonActive] = useState(true);
  const [imageSrc, setImageSrc] = useState('/src/assets/SampleImage.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          // 선택한 이미지 파일을 읽어와서 src prop에 지정
          setImageSrc(result);
        }
      };
      const formData = new FormData();
      formData.append('file', file);

      onImageUploaded(file.name);
    }
  };

  const clickFileHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error('fileInputRef is null');
    }
  };

  return (
    <>
      <div className={twMerge(`flex h-[340px] border-b-[1px]`)}>
        <span className="text-xl font-bold">사진 등록</span>
        <div className="flex flex-col items-center ml-10">
          <Image size={'sm'} src={imageSrc} alt={'상품 이미지 입니다.'} />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={fileChangeHandler}
          />
          <Button
            type={'active'}
            size={'xsmall'}
            label={'등록하기'}
            onClick={clickFileHandler}
            className="text-sm mt-4"
          />
        </div>
      </div>
    </>
  );
}
