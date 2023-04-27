import { twMerge } from 'tailwind-merge';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import React from 'react';

export interface EndDateTimeProps {
  className?: string;
  onChange?: (date: string) => void;
}

export default function EndDateTime({ onChange, className }: EndDateTimeProps) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (Date: Dayjs | null) => {
    if (Date !== null) {
      const dateToSendToAPI = Date.toISOString();
      setSelectedDate(dateToSendToAPI);
      if (onChange) {
        onChange(dateToSendToAPI);
      }
    } else {
      setSelectedDate('');
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">경매종료시간</span>
        <div className="-mt-3">
          <DateTimePicker onChange={handleChange} />
        </div>
      </div>
    </LocalizationProvider>
  );
}
