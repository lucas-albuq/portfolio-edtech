import { initTheme } from './theme.js';
import { initMenu } from './menu.js';
import { initSkills } from './skills.js'; 

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMenu();
    initSkills();
});
