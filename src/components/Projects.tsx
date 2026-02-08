export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Projets personnels</h2>
          <p>Des projets réalisés avec passion en dehors du cadre professionnel</p>
        </div>

        <div className="projects-grid">
          <a
            href="https://www.formatechsport.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src="/images/formatechsport.png" alt="FormatechSport" className="project-image" />
            <div className="project-year">2019</div>
            <h3>FormatechSport</h3>
            <p className="project-url">www.formatechsport.fr</p>
            <p className="project-description">
              Plateforme web pour accompagner des jeunes sportifs dans le monde associatif, avec un
              outil simple pour annoncer et organiser leurs sessions sportives, en extérieur et en
              gymnase.
            </p>
            <div className="tech-tags">
              <div className="tech-tags-row">
                <span className="tech-primary">NextJs</span>
                <span className="tech-primary">React</span>
                <span className="tech-primary">Strapi</span>
              </div>
              <div className="tech-tags-row">
                <span className="tech-secondary">Sass</span>
              </div>
              <div className="tech-tags-row">
                <span className="tech-infra">MongoDB</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
