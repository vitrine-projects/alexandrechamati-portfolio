interface Company {
  name: string;
  logo: string;
}

interface Skill {
  name: string;
  level: string;
  percent: number;
  companies: Company[];
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

const kicklox: Company = { name: 'Kicklox', logo: '/images/kicklox.png' };
const pharmanity: Company = { name: 'Pharmanity', logo: '/images/pharmanity.png' };
const enedis: Company = { name: 'Enedis', logo: '/images/enedis.png' };
const kaduceo: Company = { name: 'Kaduceo', logo: '/images/kaduceo.png' };
const formatech: Company = { name: 'FormatechSport', logo: '/images/formatechsport.png' };
const astro: Company = { name: 'alexandrechamati.fr', logo: '/images/favicon.svg' };

const categories: SkillCategory[] = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: [
      { name: 'HTML/SCSS', level: '10 ans', percent: 100, companies: [kaduceo, enedis, pharmanity, kicklox] },
      { name: 'TypeScript', level: '5 ans', percent: 50, companies: [pharmanity, kicklox] },
      { name: 'React', level: '5 ans', percent: 50, companies: [pharmanity, kicklox] },
      { name: 'Next.js', level: '2 ans', percent: 20, companies: [formatech] },
      { name: 'React Native', level: '1 an', percent: 10, companies: [pharmanity] },
      { name: 'Astro', level: '1 an', percent: 10, companies: [astro] },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: [
      { name: 'Symfony', level: '4 ans', percent: 40, companies: [kaduceo, pharmanity] },
      { name: 'Node.js', level: '4 ans', percent: 40, companies: [kicklox] },
      { name: 'NestJS', level: '4 ans', percent: 40, companies: [kicklox] },
      { name: 'Ruby on Rails', level: '4 ans', percent: 40, companies: [kicklox] },
      { name: 'Python', level: '3 ans', percent: 30, companies: [kaduceo] },
      { name: 'FastAPI', level: '1 an', percent: 10, companies: [pharmanity] },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: '6 ans', percent: 60, companies: [kaduceo, enedis, pharmanity] },
      { name: 'ElasticSearch', level: '5 ans', percent: 50, companies: [pharmanity, kicklox] },
      { name: 'PostgreSQL', level: '4 ans', percent: 40, companies: [kicklox] },
      { name: 'Redis', level: '4 ans', percent: 40, companies: [kicklox] },
      { name: 'MongoDB', level: '1 an', percent: 10, companies: [formatech] },
    ],
  },
  {
    icon: '🚀',
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Git', level: '10 ans', percent: 100, companies: [kaduceo, enedis, pharmanity, kicklox] },
      { name: 'Docker', level: '5 ans', percent: 50, companies: [pharmanity, kicklox] },
      { name: 'CI/CD', level: '4 ans', percent: 40, companies: [kicklox] },
      { name: 'Azure', level: '4 ans', percent: 40, companies: [kicklox] },
      { name: 'Kubernetes', level: '1 an', percent: 10, companies: [pharmanity] },
    ],
  },
];

interface AdditionalSkillBox {
  title: string;
  tags: string[];
}

const additionalSkills: AdditionalSkillBox[] = [
  { title: 'API & Architecture', tags: ['REST API', 'GraphQL', 'Microservices', 'Multi-tenant'] },
  { title: 'Méthodologies', tags: ['Agile/Scrum', 'TDD', 'Code Review', 'CI/CD'] },
  { title: 'Outils & Services', tags: ['Algolia', 'Sidekiq', 'Jest', 'Vite'] },
];

function getSkillTier(percent: number): string {
  if (percent >= 85) return 'pill-expert';
  if (percent >= 40) return 'pill-advanced';
  return 'pill-intermediate';
}

export default function Skills() {
  return (
    <section id="skills" className="section section-skills">
      <div className="container">
        <div className="section-header">
          <h2>Carte de compétences</h2>
          <p>Explorez mon écosystème technique</p>
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill) => (
                  <div className={`skill-pill ${getSkillTier(skill.percent)}`} key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                    <div className="skill-tooltip">
                      <span className="tooltip-title">{skill.name}</span>
                      <div className="tooltip-companies">
                        {skill.companies.map((c) => (
                          <div className="tooltip-company" key={c.name}>
                            {c.logo && <img src={c.logo} alt={c.name} />}
                            <span>{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          {additionalSkills.map((box) => (
            <div className="skill-box" key={box.title}>
              <h4>{box.title}</h4>
              <div className="tags">
                {box.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
