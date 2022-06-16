import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export function Chart({ data }) {
  return (
    <div>
      <ResponsiveContainer minWidth="350px" minHeight="50vh">
        <LineChart
          data={data}
          margin={{
            top: 8,
            left: 20,
            right: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#e6e6e6" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#e6e6e6" />
          <YAxis stroke="#e6e6e6" />
          <Tooltip stroke="#e6e6e6" />
          <Legend />
          <Line
            type="monotone"
            dataKey="hum"
            name="Umidade"
            stroke="#7FE83A"
            activeDot={{
              r: 6,
            }}
            unit=" kg/m³"
          />
          <Line
            type="monotone"
            dataKey="temp"
            name="Temperatura"
            stroke="#E87A51"
            activeDot={{
              r: 6,
            }}
            unit=" ºC"
          />
          <Line
            type="monotone"
            dataKey="pluviosidade"
            name="Pluviosidade"
            stroke="#3AE8C7"
            activeDot={{
              r: 6,
            }}
            unit=" mm"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}