import React from 'react';
import './ProjectCard.css';

function ProjectCard({projects}) {
    console.log(projects)

    const projectsList = projects.map( project => (
        <div class="card border-info m-auto col-md-3" id="project-card">
            <div className="img-container" id="project-image">
                <a href={project.url}>
                <img alt={project.title} src={project.image}/>
                </a>
            </div>

            <div className="card-body">
                <h4 className="card-title">{project.title}</h4>
                <p className="card-text">{project.desc}</p>
                <a href={project.github} title="Github-Profile" id={project._id} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>
        </div>
    ))

    return (
        projectsList
    );
}

export default ProjectCard;
