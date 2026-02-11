export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="section-header centered">
            <h2>Travaillons ensemble</h2>
            <p>Discutons de votre prochain projet autour d'un café ☕</p>
          </div>

          <div className="contact-grid">
            <a href="mailto:chamati.alexandre@gmail.com" className="contact-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>chamati.alexandre@gmail.com</p>
              </div>
            </a>

            <a href="tel:+33650560118" className="contact-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-info">
                <h4>Téléphone</h4>
                <p>06 50 56 01 18</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/alexandre-chamati-743190105/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <p>Alexandre Chamati</p>
              </div>
            </a>

            <a href="https://github.com/alexchamati" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p>alexchamati</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
