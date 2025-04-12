// All editable content goes here
const content = {
    name: "Robin Finnestad",
    tagline: "IT Student & Political Activist from Norway",
    
    about: `
        <p>Hey! I'm Robin, a 16-year-old Information Technology student (Vg1) at Tangen VGS in kristiansand.</p>
        <p>I'm particularly interested in finding sustainable technology solutions and building things that genuinely help people, steering clear of just contributing to massive corporations.</p>
        <p>My goal is to create a positive impact through technology, and I'm always on the lookout for new projects and ideas that align with this vision.</p>
        <p>In my freetime i work alot with politcs and voluntary work. I am the Local Leader of Socialist Youth in Vennesla, and i am financial manager of Norwegian people's aid Solidarity Youth Kristiansand.</p>
        <p>On this page you can see some of my projects and reach out to me if you want to connect or collaborate. I'm always open to new opportunities and ideas!</p>
    `,
    
    projects: [
        {
            title: "GreenScreenMod",
            description: "A simple Greenscreen mod for the game GorillaTag. The mod allows you to change the color of the green screen in the game, making it easier to use for content creation.",
            link: "https://github.com/08Robfin/GreenScreenMod",
            linkText: "Learn More"
        },
        {
            title: "Ungdomspartiene",
            description: "This is a website where you can view an overview of most Norwegian youth political parties. Some parties are missing, as this was just a school project to learn HTML and JavaScript. (Please note that all the political info is AI generated so it might be wrong!)",
            link: "https://up.robinf.pro/",
            linkText: "View Site"
        },
        {
            title: "Next Project",
            description: "Placeholder for the next thing I build or learn! Currently exploring new ideas.",
            link: "#",
            linkText: "Coming Soon"
        }
    ],
    
    contact: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/robin-finnestad-5901972b1/",
            icon: "👔"
        },
        {
            name: "GitHub",
            url: "https://github.com/08Robfin",
            icon: "💻"
        },
        {
            name: "Email",
            url: "mailto:Finnestadrobin@gmail.com",
            icon: "✉️"
        }
    ],
    
    footer: "© 2025 • Robin Finnestad"
};

// Function to load content into the page
function loadContent() {
    // Basic info
    document.getElementById('name').textContent = content.name;
    document.getElementById('tagline').textContent = content.tagline;
    
    // About section
    document.getElementById('about-content').innerHTML = content.about;
    
    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    content.projects.forEach(project => {
        projectsGrid.innerHTML += `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="project-link">
                    ${project.linkText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        `;
    });
    
    // Contact links
    const contactLinks = document.getElementById('contact-links');
    content.contact.forEach(contact => {
        contactLinks.innerHTML += `
            <a href="${contact.url}" class="contact-link" target="_blank" rel="noopener noreferrer">
                <span>${contact.icon}</span>
                <span>${contact.name}</span>
            </a>
        `;
    });
    
    // Footer
    document.getElementById('footer').innerHTML = content.footer;
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadContent);
