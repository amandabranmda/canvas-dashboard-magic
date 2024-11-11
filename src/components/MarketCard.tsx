import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MarketCardProps {
  title: string;
  value: string;
  change: string;
  type: "forex" | "stock" | "intraday";
  isPositive: boolean;
}

const MarketCard = ({ title, value, change, type, isPositive }: MarketCardProps) => {
  const getBadgeColor = () => {
    switch (type) {
      case "forex":
        return "bg-blue-100 text-forex";
      case "stock":
        return "bg-green-100 text-stock";
      case "intraday":
        return "bg-purple-100 text-intraday";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge variant="secondary" className={getBadgeColor()}>
          {type.toUpperCase()}
        </Badge>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold">{value}</p>
        <div className="flex items-center space-x-2">
          {isPositive ? (
            <ArrowUp className="w-4 h-4 text-success" />
          ) : (
            <ArrowDown className="w-4 h-4 text-danger" />
          )}
          <span className={isPositive ? "text-success" : "text-danger"}>
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default MarketCard;