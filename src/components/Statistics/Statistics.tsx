import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Text } from "ui/Text/Text";

export function Statistics() {
  const data = [
    { name: "Albatros", quantity: 4 },
    { name: "Moondrive", quantity: 3 },
    { name: "Filia", quantity: 5 },
    { name: "Czwarta strona", quantity: 7 },
    { name: "Otwarte", quantity: 6 },
    { name: "Mięta", quantity: 8 },
  ];

  return (
    <div>
      <Text
        text="Statistics"
        variant="h1"
      />
      <BarChart
        data={data}
        height={400}
        width={400}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="quantity"
          fill="#1876d2"
        />
      </BarChart>
    </div>
  );
}
