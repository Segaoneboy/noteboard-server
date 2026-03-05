const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://gtzrtsqkpkreagyggkyk.supabase.co';
const supabaseKey = 'sb_publishable_IOJvphSqaHXkIxwi__oXhQ_UIre3of1';
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;