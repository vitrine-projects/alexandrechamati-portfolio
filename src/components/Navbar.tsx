import { useEffect, useRef } from 'react';

const navLinks = [
  { href: '#skills', label: 'Compétences' },
  { href: '#about', label: 'À propos' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#experience', label: 'Parcours' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const heroTitle = document.querySelector('.hero h1');

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (heroTitle) {
        const rect = heroTitle.getBoundingClientRect();
        if (rect.bottom < 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      navbar.style.boxShadow = currentScroll > 100
        ? '0 4px 12px rgba(39, 201, 63, 0.1)'
        : 'none';
    };

    window.addEventListener('scroll', handleScroll);

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const links = navbar.querySelectorAll('.nav-menu a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="container">
        <div className="nav-brand">
          <span className="brand-logo">𐤀𐤂</span>
          <span className="brand-name">Alexandre Chamati</span>
          <img src="/images/avatar.png" alt="Avatar" className="brand-avatar" />
        </div>
        <ul className="nav-menu">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleClick(e, href)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
