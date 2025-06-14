import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://vybibwbayvodgrbqcuym.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5Ymlid2JheXZvZGdyYnFjdXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2OTI5ODIsImV4cCI6MjA2NTI2ODk4Mn0.Ts1Pg-ca372aJ7YjhBPC8V-bMBPBYl5N0wTLwA46ZE8';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };