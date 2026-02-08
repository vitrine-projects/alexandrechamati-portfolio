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
          </div>
        </div>
      </div>
    </section>
  );
}
