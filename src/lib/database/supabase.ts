import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) throw new Error("VITE_SUPABASE_URL is missing");
if (!supabaseKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing");

export const supabase = createClient(supabaseUrl, supabaseKey);