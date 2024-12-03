import { Power, XCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PortfolioOverviewProps {
  instanciasOnline: number;
  instanciasClose: number;
  instanciasEnviando: number;
}

const PortfolioOverview = ({ 
  instanciasOnline,
  instanciasClose,
  instanciasEnviando 
}: PortfolioOverviewProps) => {
  return (
    <Card className="p-6 space-y-6 bg-dark-card border-gray-800">
      <h2 className="text-2xl font-bold text-white">Instâncias Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <Power className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Instâncias Online</p>
            <p className="text-xl font-bold text-white">{instanciasOnline}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-red-500/10 rounded-lg">
            <XCircle className="w-6 h-6 text-danger" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Instâncias Close</p>
            <p className="text-xl font-bold text-danger">{instanciasClose}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <Send className="w-6 h-6 text-intraday" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Instâncias Disponíveis</p>
            <p className="text-xl font-bold text-white">{instanciasEnviando}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioOverview;