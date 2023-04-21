import { twMerge } from 'tailwind-merge';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';

export interface StartDateTimeProps {
  className?: string;
}

export default function StartDateTime({ className }: StartDateTimeProps) {
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">경매시작시간</span>
        <div className="-mt-3">
          <DateTimePicker />
        </div>
      </div>
    </>
  );
}
