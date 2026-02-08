import { useEffect } from 'react';

interface StatItem {
  icon: string;
  value: number;
  label: string;
}

const stats: StatItem[] = [
  { icon: '⏳', value: 8, label: "ans d'expérience" },
  { icon: '🛠️', value: 20, label: 'technologies' },
  { icon: '🚀', value: 20, label: 'projets livrés' },
];

export default function Hero() {
  useEffect(() => {
    const statValues = document.querySelectorAll('.stat-value');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const target = parseInt(entry.target.textContent || '0');
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = target + '+';
              clearInterval(timer);
            } else {
              entry.target.textContent = Math.floor(current) + '+';
            }
          }, 30);
          entry.target.classList.add('counted');
        }
      });
    }, { threshold: 0.5 });

    statValues.forEach(stat => observer.observe(stat));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#skills');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title-badge">
            Développeur Full Stack<br />Web &amp; Mobile 🚀
          </h2>
          <div className="hero-title-wrapper">
            <h1>Alexandre Chamati</h1>
            <img src="/images/avatar.png" alt="Avatar Alexandre" className="hero-avatar" />
          </div>
          <p className="hero-intro">
            Créateur d'expériences web performantes et scalables.<br />
            <strong>8+ ans d'expertise</strong> en JavaScript, React, Node.js, Ruby, PHP, Python.
          </p>
          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ display: 'contents' }}>
                <div className="stat-item">
                  <span className="stat-icon">{stat.icon}</span>
                  <div className="stat-content">
                    <span className="stat-value">{stat.value}+</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
                {i < stats.length - 1 && <div className="stat-divider" />}
              </div>
            ))}
          </div>
          <a href="#skills" className="btn-scroll" onClick={handleScroll}>
            <span>Découvrir mes compétences</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
