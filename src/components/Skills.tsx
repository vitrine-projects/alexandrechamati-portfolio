interface Skill {
  name: string;
  level: string;
  percent: number;
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    skills: [
      { name: 'HTML/SCSS', level: '8 ans', percent: 100 },
      { name: 'TypeScript', level: '7 ans', percent: 87 },
      { name: 'React', level: '7 ans', percent: 87 },
      { name: 'React Native', level: '5 ans', percent: 62 },
      { name: 'Next.js', level: '4 ans', percent: 50 },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: '8 ans', percent: 100 },
      { name: 'Symfony', level: '8 ans', percent: 100 },
      { name: 'Node.js', level: '7 ans', percent: 87 },
      { name: 'NestJS', level: '7 ans', percent: 87 },
      { name: 'Ruby on Rails', level: '5 ans', percent: 62 },
      { name: 'FastAPI', level: '4 ans', percent: 50 },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases & Search',
    skills: [
      { name: 'MySQL', level: '8 ans', percent: 100 },
      { name: 'PostgreSQL', level: '7 ans', percent: 87 },
      { name: 'MongoDB', level: '6 ans', percent: 75 },
      { name: 'Redis', level: '5 ans', percent: 62 },
      { name: 'ElasticSearch', level: '5 ans', percent: 62 },
    ],
  },
  {
    icon: '🚀',
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Git', level: '8 ans', percent: 100 },
      { name: 'Docker', level: '6 ans', percent: 75 },
      { name: 'CI/CD', level: '6 ans', percent: 75 },
      { name: 'Azure', level: '5 ans', percent: 62 },
      { name: 'Kubernetes', level: '3 ans', percent: 37 },
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
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map((skill) => (
                  <div className="skill-pill" data-level={skill.percent} key={skill.name}>
                    <div className="skill-pill-header">
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: `${skill.percent}%` }} />
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
