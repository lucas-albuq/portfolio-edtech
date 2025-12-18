export class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set data(value) {
        this._data = value;
        this.render();
    }

    get data() {
        return this._data;
    }

    render() {
        if (!this._data) return;

        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        const { title, description, skills, image, url } = this._data;

        const article = document.createElement('article');
        article.className = 'project-card';

        const imageDiv = document.createElement('div');
        imageDiv.className = 'project-image';
        const img = document.createElement('img');
        img.src = image;
        img.alt = title;
        imageDiv.appendChild(img);
        article.appendChild(imageDiv);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'project-content';

        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'tags';
        skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = skill;
            tagsDiv.appendChild(span);
        });
        contentDiv.appendChild(tagsDiv);

        const h3 = document.createElement('h3');
        h3.textContent = title;
        contentDiv.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = description;
        contentDiv.appendChild(p);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'project-actions';

        const openBtn = document.createElement('a');
        openBtn.href = url;
        openBtn.className = 'btn-primary small';
        openBtn.textContent = 'Open Project';
        actionsDiv.appendChild(openBtn);


        contentDiv.appendChild(actionsDiv);
        article.appendChild(contentDiv);

        this.appendChild(article);
    }
}

customElements.define('project-card', ProjectCard);

const projectsList = [
    {
        title: "Tech Courses",
        description: "A Figma prototype developed to the UI/UX class in Alpha Edtech.",
        skills: ["Figma"],
        image: "./assets/images/tech-courses.png",
        url: "https://www.figma.com/design/Z7qQQ9FDJjizJ42YJ9ppFm/UI-UX-Edtech---Aula-02?node-id=1-2&t=gjs3CNo13QFCU2Ds-1"
    },
    {
        title: "This Portfólio",
        description: "A portfolio website created to showcase my skills and projects.",
        skills: ["Javascript", "HTML", "CSS"],
        image: "./assets/images/portfolio.png",
        url: "https://github.com/lucas-albuq/portfolio-edtech"
    },
    {
        title: "Readme Class",
        description: "A README file created to the README class in Alpha Edtech.",
        skills: ["HTML", "MARKDOWN"],
        image: "./assets/images/markdown.png",
        url: "https://lucas-albuq.github.io/edtech-markdown/"
    }
];

export function initProjects() {
    const projectsContainer = document.querySelector('.projects-grid');

    if (projectsContainer) {
        projectsContainer.innerHTML = '';

        projectsList.forEach(project => {
            const projectElement = document.createElement('project-card');
            projectElement.data = project;
            projectsContainer.appendChild(projectElement);
        });
    }
}
