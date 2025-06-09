export default function Hero() {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Animated Background with Instagram logos */}
      <div className="hero-background">
        <div className="glass-container glass-container-1">
          <img src="/bgdata/Instagram_icon.png" alt="" className="instagram-logo" />
        </div>
        <div className="glass-container glass-container-2">
          <img src="/bgdata/Instagram_icon.png" alt="" className="instagram-logo" />
        </div>
        <div className="glass-container glass-container-3">
          <img src="/bgdata/Instagram_icon.png" alt="" className="instagram-logo" />
        </div>
      </div>
      
      {/* Dark overlay */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>
          <span className="word-fuck">F*CK</span>
          <span className="word-fixing"> FIXING</span>
          <br></br>
          <span className="word-your">YOUR</span>
          <span className="word-life"> LIFE</span>
        </h1>
        <p className="hero-subtitle">Ruin it. Maximize your screen time.</p>
        <a href="#join" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToJoin(); }}>
          Start Screen Maxing
        </a>
      </div>
    </section>
  );
} 