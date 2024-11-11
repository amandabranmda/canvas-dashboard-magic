import PortfolioOverview from "@/components/PortfolioOverview";
import MarketCard from "@/components/MarketCard";
import MarketTrends from "@/components/MarketTrends";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Zaps Dashboard</h1>
          <button className="bg-success hover:bg-success/90 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <span className="text-sm font-medium">New Instance</span>
          </button>
        </div>
        
        <PortfolioOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketCard
            title="Cliques"
            value="1,245"
            change="45"
            type="pressel"
            isPositive={true}
          />
          <MarketCard
            title="Leads"
            value="350"
            type="optin"
            isPositive={true}
            clicks={1245}
            leads={350}
          />
          <MarketCard
            title="Vendas Realizadas"
            value="25"
            change="R$ 12,50 ticket médio"
            type="mercado_pago"
            isPositive={true}
          />
        </div>
        
        <MarketTrends />
      </div>
    </div>
  );
};

export default Index;