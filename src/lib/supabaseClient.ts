import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nxypqnnjcekleszvxmzh.supabase.co";
const supabaseAnonKey = "sb_publishable_JfrXcN1BtDf0uZobf1BmrQ_PjJpE4c-";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
