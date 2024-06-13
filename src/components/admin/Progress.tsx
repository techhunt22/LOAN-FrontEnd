"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  fill: string;
}

const data: DataPoint[] = [
  {
    name: "18-24",
    uv: 5,
    pv: 2400,
    fill: "green",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CustomLabel: React.FC<{ viewBox: { cx: number; cy: number } }> = ({
  viewBox,
}) => {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="12"
      fill="#000000"
    >
      675
    </text>
  );
};

const Winning: React.FC = () => {
  return (
    <div className="winning h-[80px]   rounded-xl bg-primary flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="90%"
          barSize={8}
          data={data}
        >
          <RadialBar background dataKey="uv">
            <LabelList
              position="inside"
              content={<CustomLabel viewBox={{ cx: 0, cy: 0 }} />}
            />
          </RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="text-sm">EQUIFAX</p>
    </div>
  );
};

export default Winning;