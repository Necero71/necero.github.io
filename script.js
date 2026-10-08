document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme)) {
        body.classList.add('dark-mode');
        if (toggleButton) toggleButton.setAttribute('aria-pressed', 'true');
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const enabled = body.classList.toggle('dark-mode');
            localStorage.setItem('theme', enabled ? 'dark' : 'light');
            toggleButton.setAttribute('aria-pressed', enabled.toString());
        });
    }

    // 2. Interactive Card Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Show/Hide cards according to filter selection
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
