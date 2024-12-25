import { useEffect, useState } from "react";
import PortfolioOverview from "@/components/PortfolioOverview";
import MarketCard from "@/components/MarketCard";
import MarketTrends from "@/components/MarketTrends";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

interface DashboardData {
  instanciasonline: number;
  instanciasclose: number;
  instanciasenviando: number;
  cliques: number;
  leads: number;
  vendasrealizadas: number;
  ticketmedio: number;
  entradadeleads00h: number;
  limitedeleads00h: number;
  entradadeleads03h: number;
  limitedeleads03h: number;
  entradadeleads06h: number;
  limitedeleads06h: number;
  entradadeleads09h: number;
  limitedeleads09h: number;
  entradadeleads12h: number;
  limitedeleads12h: number;
  entradadeleads15h: number;
  limitedeleads15h: number;
  entradadeleads18h: number;
  limitedeleads18h: number;
  entradadeleads21h: number;
  limitedeleads21h: number;
  entradadeleads23h: number;
  limitedeleads23h: number;
}

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [instanceName, setInstanceName] = useState("");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const { toast } = useToast();

  const fetchDashboardData = async () => {
    try {
      const response = await axios.post(
        "https://n8npc.painelopen.win/webhook/dashboardzaps"
      );
      setDashboardData(response.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchDashboardData();

    // Set up polling interval
    const intervalId = setInterval(() => {
      // Only fetch if not creating an instance
      if (!loading) {
        fetchDashboardData();
      }
    }, 60000); // Changed from 20000 to 60000 (60 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [loading]);

  const createInstance = async () => {
    setLoading(true);
    setQrCode("");
    setInstanceName("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await axios.post(
        "https://webhook.zapsafe.work/webhook/criacaozap",
        {},
        { signal: controller.signal }
      );

      clearTimeout(timeoutId);

      if (response.data.qrcode && response.data.instancia) {
        setQrCode(response.data.qrcode);
        setInstanceName(response.data.instancia);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao criar instância",
        description: "Tempo limite excedido. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Calculate optin percentage
  const calculateOptinPercentage = () => {
    if (dashboardData?.cliques && dashboardData?.leads && dashboardData.cliques > 0) {
      return ((dashboardData.leads * 100) / dashboardData.cliques).toFixed(2);
    }
    return "0.00";
  };

  const trendsData = dashboardData ? [
    { time: "00:00", leads: dashboardData.entradadeleads00h, limit: dashboardData.limitedeleads00h },
    { time: "03:00", leads: dashboardData.entradadeleads03h, limit: dashboardData.limitedeleads03h },
    { time: "06:00", leads: dashboardData.entradadeleads06h, limit: dashboardData.limitedeleads06h },
    { time: "09:00", leads: dashboardData.entradadeleads09h, limit: dashboardData.limitedeleads09h },
    { time: "12:00", leads: dashboardData.entradadeleads12h, limit: dashboardData.limitedeleads12h },
    { time: "15:00", leads: dashboardData.entradadeleads15h, limit: dashboardData.limitedeleads15h },
    { time: "18:00", leads: dashboardData.entradadeleads18h, limit: dashboardData.limitedeleads18h },
    { time: "21:00", leads: dashboardData.entradadeleads21h, limit: dashboardData.limitedeleads21h },
    { time: "23:00", leads: dashboardData.entradadeleads23h, limit: dashboardData.limitedeleads23h },
  ] : [];

  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Zaps Dashboard</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-success hover:bg-success/90 text-white"
                onClick={createInstance}
              >
                Criar Instância
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-dark border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-white text-center">
                  {instanceName ? 
                    `Instância ${instanceName} criada com sucesso!` : 
                    "Gerando QR Code..."}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center gap-6">
                <div className="w-64 h-64 border-2 border-gray-700 rounded-lg flex items-center justify-center">
                  {loading ? (
                    <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                  ) : qrCode ? (
                    <img src={qrCode} alt="QR Code" className="w-full h-full p-2" />
                  ) : (
                    <div className="text-gray-500">QR Code</div>
                  )}
                </div>
                <Button 
                  className="w-full bg-success hover:bg-success/90"
                  disabled={loading}
                  onClick={createInstance}
                >
                  Criar agora
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <PortfolioOverview 
          instanciasOnline={dashboardData?.instanciasonline || 0}
          instanciasClose={dashboardData?.instanciasclose || 0}
          instanciasEnviando={dashboardData?.instanciasenviando || 0}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketCard
            title="Cliques"
            value={dashboardData?.cliques?.toString() || "0"}
            change="45"
            type="pressel"
            isPositive={true}
          />
          <MarketCard
            title="Leads"
            value={dashboardData?.leads?.toString() || "0"}
            type="optin"
            isPositive={true}
            clicks={dashboardData?.cliques || 0}
            leads={dashboardData?.leads || 0}
          />
          <MarketCard
            title="Instâncias Criadas"
            value={dashboardData?.vendasrealizadas?.toString() || "0"}
            change="Nas últimas 24 horas"
            type="mercado_pago"
            isPositive={true}
          />
        </div>
        
        <MarketTrends data={trendsData} />
      </div>
    </div>
  );
};

export default Index;