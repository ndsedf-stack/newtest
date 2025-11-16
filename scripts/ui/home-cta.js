// scripts/ui/home-cta.js
export function renderCTA() {
  const section = document.createElement('section');
  section.className = 'home-cta';

  const button = document.createElement('button');
  button.className = 'cta-btn';
  button.textContent = '🚀 CRÉER UNE SÉANCE';

  section.appendChild(button);
  return section;
}
