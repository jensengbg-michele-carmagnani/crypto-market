import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  Scatter,
  ScatterChart,
  CartesianGrid,
} from "recharts";
const BarChart = (props) => {
  const { barChartInfo: sparkline7d } = props;

  
  const data = sparkline7d?.price
 console.log(data)
  return (
    <React.Fragment>
      <ResponsiveContainer width="80%" height={400}>
        <AreaChart data={data}>
          <Area dataKey="y" stroke="#F3BA2F" />
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Tooltip />
          <CartesianGrid />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default BarChart;
