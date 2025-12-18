 

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this._data) return;

        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        const { date, title, description } = this._data;

        this.classList.add('timeline-item');

        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        this.appendChild(dot);
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'timeline-content-wrapper';

        const dateBadge = document.createElement('span');
        dateBadge.className = 'timeline-date';
        dateBadge.textContent = date;
        contentWrapper.appendChild(dateBadge);

        const card = document.createElement('div');
        card.className = 'timeline-card';

        const h3 = document.createElement('h3');
        h3.textContent = title;
        card.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = description;
        card.appendChild(p);

        contentWrapper.appendChild(card);
        this.appendChild(contentWrapper);
    }
}

customElements.define('experience-item', ExperienceItem);

const experienceList = [
    {
        date: "2025 - Present",
        title: "Web Development Student",
        description: "Studying web development at Alpha Edtech, focusing on building modern and scalable web applications. Learning and applying HTML, CSS, JavaScript, and backend fundamentals through hands-on projects."
    },
    {
        date: "2023 - Present",
        title: "Web Developer",
        description: "Developing web solutions for institutional and real-world projects, working with front-end and back-end technologies. Responsible for implementing interfaces, system logic, and improving usability and performance."
    },
    {
        date: "2022 - 2025",
        title: "Internet Computing Student",
        description: "Studying Internet Computing at the Federal Institute of Rio Grande do Norte (IFRN), building a strong foundation in web development, logic, and problem-solving through academic and practical projects."
    }
];

export function initExperience() {
    const timelineContainer = document.querySelector('.timeline');

    if (timelineContainer) {
        timelineContainer.innerHTML = '';

        experienceList.forEach(exp => {
            const expElement = document.createElement('experience-item');
            expElement.data = exp;
            timelineContainer.appendChild(expElement);
        });
    }
}
