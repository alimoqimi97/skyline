import { useEffect } from "react";
import {
    RealtimePostgresChangesPayload,
    createClient,
} from "@supabase/supabase-js";

export const supabase = createClient(
    "https://fbstdnwaepfzffscoktn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic3RkbndhZXBmemZmc2Nva3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzNjg3MjEsImV4cCI6MTk5NTk0NDcyMX0.R1R1oX2jbGhzGIojVnjKmX_yocV8l74gxV-Wx7vYftk"
);

/*
  Channel name can be any string.
  Event name can can be one of:
    - INSERT
    - UPDATE
    - DELETE
    - *
*/

export const useRealtime = (
    callback: (
        payload: RealtimePostgresChangesPayload<{ [key: string]: any }>
    ) => void
) => {
    useEffect(() => {
        const channel = supabase
            .channel("table-db-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "messages",
                },
                payload => callback?.(payload)
            )
            .subscribe();

        return () => {
            supabase?.removeChannel(channel);
        };
    }, [callback]);
};
