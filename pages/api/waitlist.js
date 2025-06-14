import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend('re_cJL8Tm61_8YeGieuw2AXEe5Zf2q3hp9mz');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

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

    // Save to Supabase
    const { error } = await supabase
      .from('screen_maxi_subscribers')
      .insert(
        [
          {
            email,
            birth_date: birthDate || null,
            morning_optimization: morningOptimization || false,
            work_performance: workPerformance || false,
            physical_wellness: physicalWellness || false,
            social_excellence: socialExcellence || false,
            environmental_setup: environmentalSetup || false,
            digital_dependency: digitalDependency || false,
            daily_description: dailyDescription || null
          }
        ],
        { returning: 'minimal' }
      );

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ message: 'Sorry, we couldn\'t save your information. Please try again.' });
    }

    console.log('Successfully saved to database');

    // Send confirmation email with download link (no attachment needed)
    const downloadUrl = `${req.headers.origin || 'https://studionestai.com'}/screenmaxi-manifesto.pdf`;
    
    await resend.emails.send({
      from: 'Screenmaxi <noreply@mail.studionestai.com>',
      to: [email],
      subject: 'Welcome to the Personalized Programs Waitlist - Your Screenmaxi Manifesto is ready!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Welcome to Screenmaxi</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #1a1a1a; color: #ffffff; margin: 0; padding: 0; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="font-size: 1.8rem; font-weight: bold; background: linear-gradient(135deg, #f8d7ff 0%, #ff82fb 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">Screenmaxi</h1>
            </div>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2px; border-radius: 12px; margin-bottom: 30px;">
              <div style="background-color: #1a1a1a; padding: 30px; border-radius: 10px;">
                <h2 style="color: #ffffff; font-size: 1.5rem; margin-bottom: 20px;">Welcome to the movement!</h2>
                
                <p style="color: #eaeaea; margin-bottom: 20px;">
                  Thank you for joining the personalized programs waitlist. You're taking the first step toward reclaiming your digital autonomy.
                </p>
                
                <p style="color: #eaeaea; margin-bottom: 30px;">
                  Here's your exclusive <strong>Screenmaxi Manifesto</strong> to get started on your journey:
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${downloadUrl}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: bold; font-size: 1.1rem;">Download the Screenmaxi Manifesto</a>
                </div>
              </div>
            </div>
            
            <div style="text-align: center; color: #666; font-size: 0.8rem;">
              <p>Screenmaxi<br>
              Taking back control, one notification at a time.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    res.status(200).json({ 
      message: 'Successfully joined the waitlist! Check your email for the Screenmaxi Manifesto.',
      data: { email, timestamp: new Date().toISOString() }
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
}