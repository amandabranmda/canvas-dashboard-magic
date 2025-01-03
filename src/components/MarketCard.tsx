import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MarketCardProps {
  title: string;
  value: string;
  change?: string;
  type: "mercado_pago" | "optin" | "pressel";
  isPositive: boolean;
  clicks?: number;
  leads?: number;
}

const MarketCard = ({ 
  title, 
  value, 
  change, 
  type, 
  isPositive,
  clicks,
  leads 
}: MarketCardProps) => {
  const getBadgeColor = () => {
    switch (type) {
      case "mercado_pago":
        return "bg-blue-500/10 text-forex";
      case "optin":
        return "bg-green-500/10 text-stock";
      case "pressel":
        return "bg-purple-500/10 text-intraday";
    }
  };

  const calculateOptinPercentage = () => {
    if (clicks && leads && clicks > 0) {
      const percentage = (leads * 100) / clicks;
      return `${percentage.toFixed(2)}% optin`;
    }
    return change;
  };

  const getDisplayType = () => {
    switch (type) {
      case "mercado_pago":
        return "HOJE";
      case "optin":
        return "OPTIN";
      case "pressel":
        return "PRESSEL";
    }
  };

  return (
    <Card className="p-6 bg-dark-card border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <Badge variant="secondary" className={getBadgeColor()}>
          {getDisplayType()}
        </Badge>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold text-white">{value}</p>
        <div className="flex items-center space-x-2">
          {isPositive ? (
            <ArrowUp className="w-4 h-4 text-success" />
          ) : (
            <ArrowDown className="w-4 h-4 text-danger" />
          )}
          <span className={isPositive ? "text-success" : "text-danger"}>
            {title === "Leads" ? calculateOptinPercentage() : change}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default MarketCard;