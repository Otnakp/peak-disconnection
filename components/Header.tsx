export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
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