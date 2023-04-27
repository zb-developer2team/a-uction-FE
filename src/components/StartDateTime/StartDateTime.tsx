import { twMerge } from 'tailwind-merge';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import React from 'react';

export interface StartDateTimeProps {
  className?: string;
  onChange?: (date: string) => void;
}

export default function StartDateTime({
  onChange,
  className,
}: StartDateTimeProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [isPast, setIsPast] = useState(false);

  const handleChange = (Date: Dayjs | null) => {
    if (Date !== null) {
      const dateToSendToAPI = Date.toISOString();
      setSelectedDate(dateToSendToAPI);

      if (onChange) {
        onChange(dateToSendToAPI);
      }
      const now = dayjs();
      const isPastDate = Date.isBefore(now);
      setIsPast(isPastDate);
    } else {
      setSelectedDate('');
      setIsPast(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">경매시작시간</span>
        <div className="-mt-3">
          <DateTimePicker onChange={handleChange} defaultValue={dayjs()} />
        </div>
        {isPast && (
          <span className="mt-3 pl-8 text-Red">
            입력된 날짜가 현재 날짜보다 이전입니다.
          </span>
        )}
      </div>
    </LocalizationProvider>
  );
}
