const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://wjdcsgphjygrjkhdqzdp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGNzZ3BoanlncmpraGRxemRwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk2NDY1MywiZXhwIjoyMDY1NTQwNjUzfQ.jl_kUolpCAtna3AqU5TLS7d7mzOyl5WZkA8fwGsEvu4';
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;