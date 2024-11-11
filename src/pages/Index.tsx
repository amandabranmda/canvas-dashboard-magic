import PortfolioOverview from "@/components/PortfolioOverview";
import MarketCard from "@/components/MarketCard";
import MarketTrends from "@/components/MarketTrends";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Trading Dashboard</h1>
        
        <PortfolioOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketCard
            title="EUR/USD"
            value="1.2045"
            change="0.45%"
            type="forex"
            isPositive={true}
          />
          <MarketCard
            title="AAPL Stock"
            value="$150.25"
            change="0.32%"
            type="stock"
            isPositive={false}
          />
          <MarketCard
            title="Intraday NIFTY"
            value="19,250"
            change="1.2%"
            type="intraday"
            isPositive={true}
          />
        </div>
        
        <MarketTrends />
      </div>
    </div>
  );
};

export default Index;