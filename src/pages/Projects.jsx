import React from 'react';

function Projects() {
    const projects = [
        {
            name: "User Management",
            description: "A user management web app with features like fetching and deleting users.",
            live: "https://use-management.vercel.app/",
            github: "https://github.com/xieryn/UseManagement.git"
        },
        {
            name: "Book Search with API",
            description: "Search for books using an external API and view detailed information.",
            live: "https://book-search-pink.vercel.app/",
            github: "https://github.com/xieryn/BookSearch.git"
        },
        {
            name: "Finals Exam Project",
            description: "A web design project made for final assessment showcasing frontend skills.",
            live: "https://xieryn.github.io/FINALS_EXAM/",
            github: "https://github.com/xieryn/FINALS_EXAM.git"
        },
        {
            name: "Responsive Website",
            description: "A fully responsive website design focusing on layout and adaptability.",
            live: "https://xieryn.github.io/RESPONSIVE-WEBSITE/",
            github: "https://github.com/xieryn/RESPONSIVE-WEBSITE.git"
        }
    ];

    return (
        <section className="skills" id="projects">
            <h2 className="heading">My Projects</h2>

            <div className="services-container">
                {projects.map((project, index) => (
                    <div
                        className="services-box"
                        key={index}
                        onClick={() => window.open(project.live, "_blank")}
                    >
                        <div className="services-info">
                            <h4>{project.name}</h4>
                            <p>{project.description}</p>
                            <div>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'underline', marginRight: '1rem' }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Live
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'underline' }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
