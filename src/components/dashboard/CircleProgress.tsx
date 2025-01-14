import { FC } from 'react';

interface CircleProgressProps {
  percentage: number;
  color: string;
}

export const CircleProgress: FC<CircleProgressProps> = ({ percentage, color }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="w-20 h-20 transform -rotate-90">
      <circle
        className="stroke-[#e6e6e6]"
        strokeWidth="5"
        fill="transparent"
        r={radius}
        cx="40"
        cy="40"
      />
      <circle
        className={`stroke-current ${color}`}
        strokeWidth="5"
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx="40"
        cy="40"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: strokeDashoffset,
        }}
      />
    </svg>
  );
};
