import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "05 / 2023", Ventas: 500, Servicios: 900, Reparaciones: 1200 },
  { name: "06 / 2023", Ventas: 350, Servicios: 958, Reparaciones: 1000 },
  { name: "07 / 2023", Ventas: 521, Servicios: 1004, Reparaciones: 1100 },
  { name: "08 / 2023", Ventas: 450, Servicios: 796, Reparaciones: 1050 },
  { name: "09 / 2023", Ventas: 500, Servicios: 859, Reparaciones: 1000 },
];

function MetricsChart() {
  return (
    <ResponsiveContainer width="50%" height="50%" className={"metrics_chart"}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorREA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorANG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#dd1b16" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#dd1b16" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorVue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#41B883" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#41B883" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
        <Area
          type="monotone"
          dataKey="Ventas"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorREA)"
        />
        <Area
          type="monotone"
          dataKey="Servicios"
          stroke="#dd1b16"
          fillOpacity={1}
          fill="url(#colorANG)"
        />
        <Area
          type="monotone"
          dataKey="Reparaciones"
          stroke="#41B883"
          fillOpacity={1}
          fill="url(#colorVue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MetricsChart;
