export default function Hero() {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>F*CK FIXING YOUR LIFE</h1>
        <p className="hero-subtitle">Ruin it. Maximize your screen time.</p>
        <a href="#join" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToJoin(); }}>
          Start Screen Maxing
        </a>
      </div>
    </section>
  );
} 