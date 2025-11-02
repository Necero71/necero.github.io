document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  if (!toggleButton) return; // Guards against missing toggle
  
  const body = document.body;
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme)) {
    body.classList.add('dark-mode');
    toggleButton.setAttribute('aria-pressed', 'true');
  }
  
  toggleButton.addEventListener('click', () => {
    const enabled = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', enabled ? 'dark' : 'light');
    toggleButton.setAttribute('aria-pressed', enabled);
  });
});


