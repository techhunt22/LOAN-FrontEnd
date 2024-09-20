import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const UserLineChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/user/data`);
        const result = await response.json();
        console.log("Fetched Data:", result); // Log the entire result

        // Extract the data array
        setData(result.data); // Access the data array directly
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="month"
          label={{ value: "Months", position: "insideBottomRight", offset: -5 }}
        />
        <YAxis
          label={{
            value: "No Of Users",
            angle: -90,
            position: "insideLeft",
            offset: 10,
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserLineChart;
