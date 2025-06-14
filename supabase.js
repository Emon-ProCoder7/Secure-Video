import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ilntlyzovdslvkexnjrp.supabase.co';  // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbnRseXpvdmRzbHZrZXhuanJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NzMzNjYsImV4cCI6MjA2NTQ0OTM2Nn0.U2JyhSn2_HqtM3BJwpUrSAzwWBa-LxYBIMHm0wO5gcs';  // Replace with your Supabase public key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
