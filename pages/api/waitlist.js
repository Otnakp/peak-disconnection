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

    // Log the data for now (replace with actual database insert later)
    console.log('Waitlist submission:', {
      email,
      birthDate,
      morningOptimization,
      workPerformance,
      physicalWellness,
      socialExcellence,
      environmentalSetup,
      digitalDependency,
      dailyDescription,
      timestamp: new Date().toISOString()
    });

    // For now, just return success
    // TODO: Replace with actual database insertion
    res.status(200).json({ 
      message: 'Successfully joined the waitlist!',
      data: { email, timestamp: new Date().toISOString() }
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}