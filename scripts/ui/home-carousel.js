import { createDayCard } from './home-day-card.js';

export function renderCarousel(program) {
  const section = document.createElement('section');
  section.className = 'home-carousel';

  const list = document.createElement('ul');
  list.className = 'days';

  // Boucle sur les jours définis dans le JSON
  program.days.forEach(day => {
    const card = createDayCard({
      label: day,
      name: program.structure[day],
      duration: 60,   // valeur par défaut (à remplacer si tu ajoutes la durée réelle)
      series: 30,     // idem
      exercises: 8,   // idem
      completed: false
    });
    list.appendChild(card);
  });

  section.appendChild(list);
  return section;
}
