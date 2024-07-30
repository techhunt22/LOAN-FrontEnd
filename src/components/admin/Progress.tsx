"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
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

interface CustomLabelProps {
  value: number;
  viewBox: { cx: number; cy: number };
}

const CustomLabel: React.FC<CustomLabelProps> = ({ value, viewBox }) => {
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
      {value}
    </text>
  );
};

interface WinningProps {
  name: string;
  value: number;
  data: DataPoint[];
}

const Winning: React.FC<WinningProps> = ({ name, value, data }) => {
  return (
    <div className="winning h-[80px] rounded-xl bg-primary flex flex-col items-center justify-center">
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
              content={<CustomLabel value={value} viewBox={{ cx: 0, cy: 0 }} />}
            />
          </RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="text-sm uppercase">{name}</p>
    </div>
  );
};

const exampleData: DataPoint[] = [
  {
    name: "18-24",
    uv: 5,
    pv: 2400,
    fill: "green",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <Winning name="EQUIFAX" value={675} data={exampleData} />
    </div>
  );
};

export default App;
