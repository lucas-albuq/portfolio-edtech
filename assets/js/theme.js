export function initTheme() {
    const toggleSwitch = document.querySelector('#theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    const imageLogo = document.querySelector('.logo img');

    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            imageLogo.src = './assets/images/logo-dark.svg';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            imageLogo.src = './assets/images/logo.svg';
        }
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }
}