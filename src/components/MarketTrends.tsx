import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TrendsDataPoint {
  time: string;
  leads: number;
  limit: number;
}

interface MarketTrendsProps {
  data: TrendsDataPoint[];
}

const MarketTrends = ({ data }: MarketTrendsProps) => {
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