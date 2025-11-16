// scripts/modules/home-renderer.js
const root = document.getElementById('app');
if (!root) {
  document.body.innerHTML = '<pre style="color:red">Erreur: #app introuvable</pre>';
} else {
  root.innerHTML = `
    <header class="home-header">
      <h1 class="home-title">Hybrid Master 61</h1>
      <p class="home-subtitle">Programme premium musculation & performance</p>
    </header>
    <section class="home-carousel">
      <ul class="days">
        <li class="day-card">
          <h2>Dimanche • Jour 1 — DOS + JAMBES LOURDES + BRAS</h2>
          <p>⏱ 68 min • 💪 32 séries • 🏋️ 8 exercices</p>
          <button class="start-btn">COMPLÉTÉ ✅</button>
        </li>
      </ul>
    </section>
    <section class="home-summary">
      <div class="summary-rings">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="cyan" stroke-width="8" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="orange" stroke-width="8" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="magenta" stroke-width="8" fill="none" />
        </svg>
      </div>
      <div class="summary-timer">00:00</div>
      <div class="summary-stats">
        <p>🔥 Intensité: 85%</p>
        <p>💪 Séries: 32</p>
        <p>🏋️ Exercices: 8</p>
      </div>
    </section>
    <section class="home-actions">
      <button class="action-btn">➕ Ajouter exercice</button>
      <button class="action-btn">📊 Statistiques semaine</button>
      <button class="action-btn">⚡ Motivation</button>
    </section>
    <section class="home-cta">
      <button class="cta-btn">🚀 CRÉER UNE SÉANCE</button>
    </section>
  `;
}
