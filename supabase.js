const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://gtzrtsqkpkreagyggkyk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0enJ0c3FrcGtyZWFneWdna3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjczOTQsImV4cCI6MjA4ODMwMzM5NH0._vpIYeOjdxyZZjH56XrKG8LqHGiQ4YYyDL_xzRQtPdc';
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;