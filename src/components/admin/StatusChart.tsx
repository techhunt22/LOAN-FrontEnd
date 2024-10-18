import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Updated data for the new X and Y axis labels
// const data = [
//   { day: "Mon", status: 0 },
//   { day: "Tue", status: 1 },
//   { day: "Wed", status: 2 },
//   { day: "Thu", status: 3 },
// ];

// Custom Y-axis labels
const yLabels = [
  "LetterSent",
  "ClientResponse",
  "ItemDeleted",
  "Analyzing",
  "Received",
];

// const data = [
//   { day: "Tue", status: 4 },
//   { day: "Wed", status: 4 },
//   { day: "Wed", status: 0 },
//   { day: "Thu", status: 0 },
//   { day: "Mon", status: 0 },
//   { day: "Mon", status: 0 },
//   { day: "Sat", status: 0 },
//   { day: "Sat", status: 0 },
//   { day: "Sat", status: 2 },
//   { day: "Fri", status: 1 },
//   { day: "Fri", status: 0 },
//   { day: "Fri", status: 0 },
//   { day: "Fri", status: 0 },
//   { day: "Fri", status: 2 },
//   { day: "Thu", status: 0 },
//   { day: "Fri", status: 0 },
//   { day: "Wed", status: 0 },
//   { day: "Thu", status: 0 },
// ];

const UserLineChart = ({ data }: any) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80, // Increase left margin to accommodate Y-axis labels
            bottom: 5,
          }}
        >
          {/* XAxis with custom labels for days */}
          <XAxis dataKey="day" />

          {/* YAxis with custom tick formatter */}
          <YAxis
            tickFormatter={(value) => yLabels[value]} // Format Y-axis values to custom labels
            domain={[0, yLabels.length - 1]} // Set the domain to fit the labels
            tick={{ fontSize: 12, width: 100 }} // Increase width for tick labels
          />

          {/* Line chart data */}
          <Line
            type="monotone"
            dataKey="status"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default UserLineChart;
