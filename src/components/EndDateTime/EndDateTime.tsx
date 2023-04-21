import { twMerge } from 'tailwind-merge';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';

export interface EndDateTimeProps {
  className?: string;
}

export default function EndDateTime({ className }: EndDateTimeProps) {
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">경매종료시간</span>
        <div className="-mt-3">
          <DateTimePicker />
        </div>
      </div>
    </>
  );
}
