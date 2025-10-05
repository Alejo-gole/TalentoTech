const toggleBtn = document.getElementById('toggleBtn');
const root = document.documentElement;

let theme = 0;

toggleBtn.addEventListener('click', () => {
  switch (theme) {
    case 0: // Modo oscuro
      root.style.setProperty('--color-bg-body', '#495057');
      root.style.setProperty('--color-bg-section', '#212529');
      root.style.setProperty('--color-bg-card', '#0c1821');
      root.style.setProperty('--color-text-dark', '#f8f9fa');
      root.style.setProperty('--color-text-alternative', '#495057');
      root.style.setProperty('--color-text-light', '#e9ecef');
      root.style.setProperty('--color-accent-yellow', '#d8f3dc');
      theme = 1;
      break;

    case 1: // Modo kawaii
      root.style.setProperty('--color-bg-body', '#eae2b7');
      root.style.setProperty('--color-bg-section', '#f77f00');
      root.style.setProperty('--color-bg-card', '#fcbf49');
      root.style.setProperty('--color-text-dark', '#003049');
      root.style.setProperty('--color-text-alternative', '#003049');
      root.style.setProperty('--color-text-light', '#eae2b7');
      root.style.setProperty('--color-accent-yellow', '#d62828');
      theme = 2;
      break;

    default: // Modo claro
      root.style.setProperty('--color-bg-body', '#FFFFFF');
      root.style.setProperty('--color-bg-section', '#E5E5E5');
      root.style.setProperty('--color-bg-card', '#FCA311');
      root.style.setProperty('--color-text-dark', '#000000');
      root.style.setProperty('--color-text-alternative', '#14213D');
      root.style.setProperty('--color-text-light', '#FFFFFF');
      root.style.setProperty('--color-accent-yellow', '#FCA311');
      theme = 0;
  }
});