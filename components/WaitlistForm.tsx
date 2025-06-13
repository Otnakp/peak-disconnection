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
    digitalDependency: false,
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
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Successfully joined the waitlist! Welcome to Screen Maxi.');
        setFormData({
          email: '',
          birthDate: '',
          morningOptimization: false,
          workPerformance: false,
          physicalWellness: false,
          socialExcellence: false,
          environmentalSetup: false,
          digitalDependency: false,
          dailyDescription: ''
        });
      } else {
        setMessage(`❌ ${result.message || 'Error joining waitlist. Please try again.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('❌ Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="waitlist" id="join">
      <div className="container">
        <h2 className="section-title">Join the Waitlist</h2>
        <p className="waitlist-subtitle">Join our exclusive waitlist to be the first to know when we launch.</p>
        
        <div className="waitlist-form-container">
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-row">
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
            </div>
            
            <div className="form-group">
              <label>Programs of Interest (Optional)</label>
              <div className="programs-grid">
                <div className={`program-checkbox ${formData.morningOptimization ? 'checked' : ''}`} onClick={() => setFormData(prev => ({ ...prev, morningOptimization: !prev.morningOptimization }))}>
                  <input
                    type="checkbox"
                    name="morningOptimization"
                    checked={formData.morningOptimization}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                  <span className="program-name">Morning Optimization</span>
                </div>
                <div className={`program-checkbox ${formData.workPerformance ? 'checked' : ''}`} onClick={() => setFormData(prev => ({ ...prev, workPerformance: !prev.workPerformance }))}>
                  <input
                    type="checkbox"
                    name="workPerformance"
                    checked={formData.workPerformance}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                  <span className="program-name">Work Performance</span>
                </div>
                <div className={`program-checkbox ${formData.physicalWellness ? 'checked' : ''}`} onClick={() => setFormData(prev => ({ ...prev, physicalWellness: !prev.physicalWellness }))}>
                  <input
                    type="checkbox"
                    name="workPerformance"
                    checked={formData.physicalWellness}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                  <span className="program-name">Physical Wellness</span>
                </div>
                <div className={`program-checkbox ${formData.socialExcellence ? 'checked' : ''}`} onClick={() => setFormData(prev => ({ ...prev, socialExcellence: !prev.socialExcellence }))}>
                  <input
                    type="checkbox"
                    name="socialExcellence"
                    checked={formData.socialExcellence}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                  <span className="program-name">Social Excellence</span>
                </div>
                <div className={`program-checkbox ${formData.environmentalSetup ? 'checked' : ''}`} onClick={() => setFormData(prev => ({ ...prev, environmentalSetup: !prev.environmentalSetup }))}>
                  <input
                    type="checkbox"
                    name="environmentalSetup"
                    checked={formData.environmentalSetup}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                  <span className="program-name">Environmental Setup</span>
                </div>
                <div className={`program-checkbox ${formData.digitalDependency ? 'checked' : ''}`} onClick={() => setFormData(prev => ({ ...prev, digitalDependency: !prev.digitalDependency }))}>
                  <input
                    type="checkbox"
                    name="digitalDependency"
                    checked={formData.digitalDependency}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                  <span className="program-name">Digital Dependency</span>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="dailyDescription">Daily Routine Description (Optional)</label>
              <textarea
                id="dailyDescription"
                name="dailyDescription"
                rows={4}
                placeholder="Tell us about your typical day..."
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