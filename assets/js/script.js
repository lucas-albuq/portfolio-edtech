import { initTheme } from './theme.js';
import { initMenu } from './menu.js';
import { initSkills } from './skills.js'; 
import { initProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMenu();
    initSkills();
    initProjects();
});
