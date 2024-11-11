import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", leads: 20, limit: 100 },
  { time: "03:00", leads: 35, limit: 100 },
  { time: "06:00", leads: 45, limit: 100 },
  { time: "09:00", leads: 60, limit: 100 },
  { time: "12:00", leads: 75, limit: 100 },
  { time: "15:00", leads: 85, limit: 100 },
  { time: "18:00", leads: 95, limit: 100 },
  { time: "21:00", leads: 98, limit: 100 },
  { time: "23:00", leads: 100, limit: 100 },
];

const MarketTrends = () => {
  return (
    <Card className="p-6 bg-dark-card border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white">Progresso de Leads (24h)</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '0.375rem',
                color: '#fff'
              }}
            />
            <Line
              type="monotone"
              dataKey="leads"
              name="Entrada de Leads"
              stroke="#22C55E"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="limit"
              name="Limite de Leads"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MarketTrends;