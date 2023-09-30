import React from 'react';


function ProjectsCard({ project }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card nft-proj mb-3">
        <div className="inside-card text-center">
          <img src={project.img} alt="" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-text">
            <strong>Technologies Used:</strong> {project.technologies}
          </p>
          <a
            href={project.link}
            className="nft-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the {project.title}
          </a>
        </div>
      </div>
    </div>
  );
}



export default ProjectsCard;
