interface TechTags {
  primary: string[];
  secondary: string[];
  infra?: string[];
}

interface ExperienceItem {
  yearStart: string;
  yearEnd: string;
  badgeClass: string;
  badgeLabel: string;
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  techTags: TechTags;
}

const experiences: ExperienceItem[] = [
  {
    yearStart: '2021',
    yearEnd: 'Présent',
    badgeClass: 'active',
    badgeLabel: 'En cours',
    logo: '/images/kicklox.png',
    logoAlt: 'Kicklox',
    title: 'Développeur Fullstack',
    subtitle: 'Kicklox • Télétravail',
    description: "Application de recrutement innovante connectant talents et entreprises, avec gestion complète du cycle de mission.",
    achievements: [
      'Migration frontend vers Vite et architecture multi-tenant',
      "Intégration de solutions IA pour automatisation des processus",
      'Gestion infrastructure cloud et pipelines CI/CD',
      'Développement moteurs de recherche avancés avec ElasticSearch',
    ],
    techTags: {
      primary: ['TypeScript', 'Vite', 'React', 'NodeJS', 'RubyOnRails', 'ElasticSearch', 'GraphQL'],
      secondary: ['html/scss', 'Sidekiq', 'Redis', 'PostgreSQL', 'JavaScript', 'Algolia', 'API REST', 'Jest'],
      infra: ['Cloud Azure (Web Apps)', 'OVH', 'Docker'],
    },
  },
  {
    yearStart: '2020',
    yearEnd: '2021',
    badgeClass: 'lead',
    badgeLabel: 'Lead',
    logo: '/images/pharmanity.png',
    logoAlt: 'Pharmanity',
    title: 'Lead Développeur Fullstack',
    subtitle: 'Pharmanity • Télétravail',
    description: 'Plateforme e-santé avec écosystème web et mobile pour pharmacies.',
    achievements: [
      "Leadership technique et mise en place d'organisation agile",
      'Développement site web et applications mobiles React Native',
      'Gestion infrastructure Kubernetes et déploiements',
    ],
    techTags: {
      primary: ['TypeScript', 'React', 'ReactNative', 'Symfony', 'ElasticSearch', 'FastAPI'],
      secondary: ['html/css', 'PHP', 'CodeIgniter', 'JavaScript', 'MySQL'],
      infra: ['Kubernetes', 'Docker', 'OVH'],
    },
  },
  {
    yearStart: '2018',
    yearEnd: '2019',
    badgeClass: 'award',
    badgeLabel: 'Prix Innovation',
    logo: '/images/enedis.png',
    logoAlt: 'Enedis',
    title: 'Développeur Web',
    subtitle: 'Enedis • Carcassonne',
    description: "Applications métier pour gestion d'infrastructures électriques.",
    achievements: [
      'Application gestion conventions (Prix Innovation interne)',
      'Outil de planification des travaux',
    ],
    techTags: {
      primary: ['CodeIgniter', 'Jquery', 'Ajax'],
      secondary: ['html/css', 'PHP', 'JavaScript', 'MySQL'],
    },
  },
  {
    yearStart: '2015',
    yearEnd: '2017',
    badgeClass: 'study',
    badgeLabel: 'Alternance',
    logo: '/images/kaduceo.png',
    logoAlt: 'Kaduceo',
    title: 'Développeur Web/BI',
    subtitle: 'Kaduceo • Toulouse',
    description: "Store d'applications pour hôpitaux et Business Intelligence.",
    achievements: [
      'Développement plateforme de gestion données hospitalières',
      'Traitement de volumes massifs de données (BI)',
    ],
    techTags: {
      primary: ['Symfony', 'JavaScript', 'Jquery', 'Ajax', 'Python'],
      secondary: ['html/css', 'PHP', 'MySQL'],
    },
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Parcours professionnel</h2>
          <p>Mon expérience à travers les années</p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.yearStart + exp.logoAlt}>
              <div className="timeline-date">
                <span className="year">{exp.yearStart}</span>
                <span className="to">{exp.yearEnd}</span>
              </div>
              <div className="timeline-card">
                <div className={`card-badge ${exp.badgeClass}`}>{exp.badgeLabel}</div>
                <div className="card-title-row">
                  <img src={exp.logo} alt={exp.logoAlt} className="company-logo" />
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.subtitle}</h4>
                  </div>
                </div>
                <p className="description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  <div className="tech-tags-row">
                    {exp.techTags.primary.map((t) => (
                      <span className="tech-primary" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="tech-tags-row">
                    {exp.techTags.secondary.map((t) => (
                      <span className="tech-secondary" key={t}>{t}</span>
                    ))}
                  </div>
                  {exp.techTags.infra && (
                    <div className="tech-tags-row">
                      {exp.techTags.infra.map((t) => (
                        <span className="tech-infra" key={t}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
