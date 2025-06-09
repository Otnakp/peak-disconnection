import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <nav className="container">
        <div className="logo">Screen Maxi</div>
        <ul className="nav-links">
          <li><a href="#programs" onClick={(e) => { e.preventDefault(); scrollToSection('programs'); }}>Programs</a></li>
          <li><a href="#join" onClick={(e) => { e.preventDefault(); scrollToSection('join'); }}>Join Now</a></li>
        </ul>
      </nav>
    </header>
  );
} 