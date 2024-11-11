import PortfolioOverview from "@/components/PortfolioOverview";
import MarketCard from "@/components/MarketCard";
import MarketTrends from "@/components/MarketTrends";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Trading Dashboard</h1>
          <button className="bg-success hover:bg-success/90 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <span className="text-sm font-medium">New Instance</span>
          </button>
        </div>
        
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