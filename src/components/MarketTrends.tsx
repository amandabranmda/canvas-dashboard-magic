import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", value: 120 },
  { time: "03:00", value: 110 },
  { time: "06:00", value: 130 },
  { time: "09:00", value: 125 },
  { time: "12:00", value: 115 },
  { time: "15:00", value: 140 },
  { time: "18:00", value: 135 },
  { time: "21:00", value: 145 },
  { time: "23:00", value: 115 },
];

const MarketTrends = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Market Trends</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22C55E"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MarketTrends;