import React from 'react';
import './ProjectCard.css';

function ProjectCard({props}) {
    console.log({props})
    return (
        <div class="card border-info m-auto">
            <div className="img-container">
                <img alt={props.title} src={props.image} />
            </div>
            <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <p class="card-text">{props.desc}</p>
                <a href={props.github} title="Github-Profile" id={props.id} target="_blank"><i className="fab fa-github"></i></a>
            </div>
        </div>
    );
}

export default ProjectCard;
