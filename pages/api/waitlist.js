import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://bkoslwlgrigxiywbmarz.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      email,
      birthDate,
      morningOptimization,
      workPerformance,
      physicalWellness,
      socialExcellence,
      environmentalSetup,
      digitalDependency,
      dailyDescription
    } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Insert into database
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          birth_date: birthDate || null,
          morning_optimization: morningOptimization || false,
          work_performance: workPerformance || false,
          physical_wellness: physicalWellness || false,
          social_excellence: socialExcellence || false,
          environmental_setup: environmentalSetup || false,
          digital_dependency: digitalDependency || false,
          daily_description: dailyDescription || null,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error: error.message });
    }

    res.status(200).json({ 
      message: 'Successfully joined the waitlist!', 
      data: data[0] 
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}