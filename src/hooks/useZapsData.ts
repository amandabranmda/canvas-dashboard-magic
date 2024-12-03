import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useZapsData = () => {
  const fetchZapsData = async () => {
    const [onlineResult, closeResult, sendingResult] = await Promise.all([
      // Get online instances (status = 'open')
      supabase
        .from('zaps')
        .select('id', { count: 'exact' })
        .eq('status', 'open'),
      
      // Get closed instances (status = 'close')
      supabase
        .from('zaps')
        .select('id', { count: 'exact' })
        .eq('status', 'close'),
      
      // Get sending instances (status = 'open' AND aquecimento = 'enviando')
      supabase
        .from('zaps')
        .select('id', { count: 'exact' })
        .eq('status', 'open')
        .eq('aquecimento', 'enviando')
    ]);

    return {
      instanciasOnline: onlineResult.count || 0,
      instanciasClose: closeResult.count || 0,
      instanciasEnviando: sendingResult.count || 0
    };
  };

  return useQuery({
    queryKey: ['zaps-data'],
    queryFn: fetchZapsData,
    refetchInterval: 20000, // Refetch every 20 seconds
  });
};