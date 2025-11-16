// scripts/ui/home-actions.js
export function renderActions() {
  const section = document.createElement('section');
  section.className = 'home-actions';

  const addBtn = document.createElement('button');
  addBtn.textContent = '➕ Ajouter exercice';
  addBtn.className = 'action-btn';

  const statsBtn = document.createElement('button');
  statsBtn.textContent = '📊 Statistiques semaine';
  statsBtn.className = 'action-btn';

  const motivationBtn = document.createElement('button');
  motivationBtn.textContent = '⚡ Motivation';
  motivationBtn.className = 'action-btn';

  section.appendChild(addBtn);
  section.appendChild(statsBtn);
  section.appendChild(motivationBtn);

  return section;
}
