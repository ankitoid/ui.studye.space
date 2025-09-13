// Inside PieChart component
import { PieChart as RePieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Frontend", value: 40 },
  { name: "Backend", value: 30 },
  { name: "DevOps", value: 20 },
  { name: "Others", value: 10 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

function PieChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-fit">
      <RePieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RePieChart>
    </div>
  );
}
