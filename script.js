// Dark Mode Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for user's preference in local storage or system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem('theme');

    // Logic to set the initial state without transition on first load
    // The CSS transition should handle the fading when the class is toggled.
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme)) {
        // We set the initial state
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save the user's preference
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });

    console.log("Portfolio script loaded!");
});
// You can add interactive elements here later.
// For example, a "dark mode" toggle or animations on scroll.
