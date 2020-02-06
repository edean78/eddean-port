import React from 'react';
import './ProjectCard.css';

function ProjectCard() {
    return (
        <div class="card border-info">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div class="card-body">
                <h4 class="card-title">{props.name}</h4>
                <p class="card-text">{props.desc}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
