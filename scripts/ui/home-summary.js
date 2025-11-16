// scripts/ui/home-summary.js
export function renderSummary() {
  const section = document.createElement('section');
  section.className = 'home-summary';

  // Anneaux concentriques (placeholder SVG)
  const rings = document.createElement('div');
  rings.className = 'summary-rings';
  rings.innerHTML = `
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" stroke="cyan" stroke-width="8" fill="none" />
      <circle cx="100" cy="100" r="60" stroke="orange" stroke-width="8" fill="none" />
      <circle cx="100" cy="100" r="40" stroke="magenta" stroke-width="8" fill="none" />
    </svg>
  `;
  section.appendChild(rings);

  // Timer numérique
  const timer = document.createElement('div');
  timer.className = 'summary-timer';
  timer.textContent = '00:00';
  section.appendChild(timer);

  // Stats live
  const stats = document.createElement('div');
  stats.className = 'summary-stats';
  stats.innerHTML = `
    <p>🔥 Intensité: 85%</p>
    <p>💪 Séries: 32</p>
    <p>🏋️ Exercices: 8</p>
  `;
  section.appendChild(stats);

  return section;
}
