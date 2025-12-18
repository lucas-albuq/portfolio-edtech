export class SkillItem extends HTMLElement {
    constructor() {
        super();
        this.name = '';
        this.iconClass = '';
    }

    static get observedAttributes() {
        return ['name', 'icon'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;

        if (property === 'name') this.name = newValue;
        if (property === 'icon') this.iconClass = newValue;

        this.render();
    }

    connectedCallback() {
        if (!this.hasChildNodes()) {
            this.render();
        }
    }

    render() {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        const container = document.createElement('div');
        container.className = 'skill-item';
        container.setAttribute('data-tooltip', this.name);

        const icon = document.createElement('i');
        if (this.iconClass) {
            const classes = this.iconClass.split(' ');
            icon.classList.add(...classes);
        }

        container.appendChild(icon);
        this.appendChild(container);
    }
}

customElements.define('skill-item', SkillItem);

const skillsList = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'Git', icon: 'fab fa-git-alt' },
];

export function initSkills() {
    const skillsContainer = document.querySelector('.skills-container');

    if (skillsContainer) {
        skillsContainer.innerHTML = '';

        skillsList.forEach(skill => {
            const skillElement = document.createElement('skill-item');
            skillElement.setAttribute('name', skill.name);
            skillElement.setAttribute('icon', skill.icon);
            skillsContainer.appendChild(skillElement);
        });
    }
}
