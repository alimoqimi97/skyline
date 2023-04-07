import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://fbstdnwaepfzffscoktn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic3RkbndhZXBmemZmc2Nva3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzNjg3MjEsImV4cCI6MTk5NTk0NDcyMX0.R1R1oX2jbGhzGIojVnjKmX_yocV8l74gxV-Wx7vYftk"
);
