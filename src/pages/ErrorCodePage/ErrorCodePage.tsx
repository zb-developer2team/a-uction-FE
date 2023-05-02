import { twMerge } from 'tailwind-merge';

export interface ErrorCodeProps {
  className?: string;
  children?: string;
}

export default function ErrorCodePage({ className, children }: ErrorCodeProps) {
  return (
    <div
      className={twMerge(
        `w-screen flex-col justify-center items-centerfont-line-seed-sans-kr`
      )}
    >
      <div className="h-screen flex flex-col text-5xl font-bold justify-center items-center">
        {children}
      </div>
    </div>
  );
}
