interface Hobby {
  icon: string;
  title: string;
  text: string;
}

const hobbies: Hobby[] = [
  { icon: '🥾 🏔️', title: 'Randonnée & Trail', text: 'Exploration et course en montagne' },
  { icon: '🏊‍♂️ 🚴 🏃‍♂️', title: 'Triathlon', text: 'Natation, vélo et course à pied' },
  { icon: '🏍️ 🗺️', title: 'Voyage à moto', text: 'Road trips et exploration sur deux roues' },
  { icon: '💻 📱', title: 'Je code quand même !', text: 'Développement projets personnels, Web & Mobile' },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Centres d'intérêt</h2>
          <p>Quand je ne code pas...</p>
        </div>
        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <div className="hobby-card" key={hobby.title}>
              <div className="hobby-icon">{hobby.icon}</div>
              <h4>{hobby.title}</h4>
              <p>{hobby.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
