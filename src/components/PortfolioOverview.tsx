import { DollarSign, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const PortfolioOverview = () => {
  return (
    <Card className="p-6 space-y-6 bg-dark-card border-gray-800">
      <h2 className="text-2xl font-bold text-white">Portfolio Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <DollarSign className="w-6 h-6 text-forex" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Total Balance</p>
            <p className="text-xl font-bold text-white">$25,420.65</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <TrendingUp className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Today's Profit</p>
            <p className="text-xl font-bold text-success">+$420.35</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <Clock className="w-6 h-6 text-intraday" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Active Trades</p>
            <p className="text-xl font-bold text-white">12</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioOverview;