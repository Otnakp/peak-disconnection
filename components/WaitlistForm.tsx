import { useState } from 'react';

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    birthDate: '',
    morningOptimization: false,
    workPerformance: false,
    physicalWellness: false,
    socialExcellence: false,
    environmentalSetup: false,
    dailyDescription: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Here you would typically send the data to your API
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('✅ Successfully joined the waitlist! Welcome to Screen Maxi.');
      setFormData({
        email: '',
        birthDate: '',
        morningOptimization: false,
        workPerformance: false,
        physicalWellness: false,
        socialExcellence: false,
        environmentalSetup: false,
        dailyDescription: ''
      });
    } catch (error) {
      setMessage('❌ Error joining waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="waitlist" id="join">
      <div className="container">
        <h2 className="section-title">Join the Waitlist</h2>
        <p className="waitlist-subtitle">Ready to embrace strategic isolation? Join our exclusive waitlist.</p>
        
        <div className="waitlist-form-container">
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="birthDate">Birth Date (Optional)</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label>Which programs interest you? (Optional)</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="morningOptimization"
                    checked={formData.morningOptimization}
                    onChange={handleInputChange}
                  />
                  <span>Morning Optimization Protocol</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="workPerformance"
                    checked={formData.workPerformance}
                    onChange={handleInputChange}
                  />
                  <span>Work Performance Standards</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="physicalWellness"
                    checked={formData.physicalWellness}
                    onChange={handleInputChange}
                  />
                  <span>Physical Wellness Guidelines</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="socialExcellence"
                    checked={formData.socialExcellence}
                    onChange={handleInputChange}
                  />
                  <span>Social Excellence Framework</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="environmentalSetup"
                    checked={formData.environmentalSetup}
                    onChange={handleInputChange}
                  />
                  <span>Environmental Setup</span>
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="dailyDescription">What do you usually do in a day? (Optional)</label>
              <textarea
                id="dailyDescription"
                name="dailyDescription"
                rows={4}
                placeholder="Describe your typical daily routine..."
                value={formData.dailyDescription}
                onChange={handleInputChange}
              />
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
            
            {message && (
              <div 
                className="form-message" 
                style={{ 
                  color: message.includes('✅') ? '#4ade80' : '#f87171' 
                }}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 