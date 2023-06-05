// Dark Mode Active function";

const DarkMode = document.getElementById('dark-mode');

DarkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});