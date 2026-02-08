interface InfoCard {
  icon: string;
  title: string;
  text: string;
}

const cards: InfoCard[] = [
  { icon: '📍', title: 'Localisation', text: 'Foix, France' },
  { icon: '💼', title: 'Statut', text: 'Disponible pour projets' },
  { icon: '🗣️', title: 'Langues', text: 'Français • Anglais' },
  { icon: '🎓', title: 'Formation', text: 'Master Expert Informatique' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2>À propos de moi</h2>
          <p>Passionné par la création d'applications Web &amp; Mobile</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              Bonjour ! Je suis <strong>Alexandre</strong>, développeur full stack avec plus de{' '}
              <strong>8 ans d'expérience</strong> dans la conception et le développement
              d'applications web modernes et scalables.
            </p>
            <p>
              Ma passion ? Transformer des idées complexes en solutions élégantes et performantes.
              Du frontend React ultra-réactif au backend robuste avec Node.js, Ruby on Rails et Python,
              je maîtrise l'ensemble de la stack pour créer des expériences utilisateur exceptionnelles.
            </p>
            <p>
              Lors de mon dernier poste chez <strong>Kicklox</strong> en télétravail, j'intègre des solutions d'IA
              et optimise des architectures multi-tenant. J'ai également dirigé des équipes techniques
              chez Pharmanity et remporté un <strong>Prix Innovation</strong> chez Enedis.
            </p>
          </div>

          <div className="about-cards">
            {cards.map((card) => (
              <div className="info-card" key={card.title}>
                <div className="card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
