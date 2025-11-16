export function renderHeader() {
  const header = document.createElement('header');
  header.className = 'home-header';

  const title = document.createElement('h1');
  title.className = 'home-title';
  title.textContent = 'Hybrid Master 61';

  const subtitle = document.createElement('p');
  subtitle.className = 'home-subtitle';
  subtitle.textContent = 'Programme premium musculation & performance';

  header.appendChild(title);
  header.appendChild(subtitle);

  return header;
}

