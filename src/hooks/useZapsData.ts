import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useZapsData = () => {
  const [data, setData] = useState({
    instanciasOnline: 0,
    instanciasClose: 0,
    instanciasEnviando: 0
  });

  useEffect(() => {
    // Initial fetch
    fetchZapsData();

    // Subscribe to realtime changes
    const channel = supabase
      .channel('zaps_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'zaps'
        },
        () => {
          // When any change happens, refetch the counts
          fetchZapsData();
        }
      )
      .subscribe();

    // Cleanup subscription
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

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

    setData({
      instanciasOnline: onlineResult.count || 0,
      instanciasClose: closeResult.count || 0,
      instanciasEnviando: sendingResult.count || 0
    });
  };

  return { data };
};