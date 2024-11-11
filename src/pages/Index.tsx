import PortfolioOverview from "@/components/PortfolioOverview";
import MarketCard from "@/components/MarketCard";
import MarketTrends from "@/components/MarketTrends";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Zaps Dashboard</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-success hover:bg-success/90 text-white">
                Criar Instância
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-dark border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-white text-center">
                  Escaneie o QR Code
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center gap-6">
                <div className="w-64 h-64 border-2 border-gray-700 rounded-lg flex items-center justify-center">
                  {/* QR Code placeholder */}
                  <div className="text-gray-500">QR Code</div>
                </div>
                <Button className="w-full bg-success hover:bg-success/90">
                  Criar agora
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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