
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jmudqnytkzwdebckjniv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptdWRxbnl0a3p3ZGViY2tqbml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxODc5NjIsImV4cCI6MjA1ODc2Mzk2Mn0.N2QY35j2wOs8jNsmmc_ZjrseKesT3BKhR3v7u-h0kuI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
