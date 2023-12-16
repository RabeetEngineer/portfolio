import React from 'react';

function ProjectsCard({ projectsData }) {
  return (
  <>
    
    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
      <div className="card nft-proj mb-3">
      <a href={projectsData.link} style={{textDecoration:"none", color:"black"}}
      target="_blank">
        <div className="inside-card text-center">
          <img src={projectsData.img} alt={projectsData.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{projectsData.title}</h5>
          <p className="card-text">
            <strong>Technologies Used:</strong> {projectsData.technologies}
          </p>
          <a 
            href={projectsData.link}
            className="nft-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the {projectsData.title}
          </a>
        </div>
        </a>
      </div>
    </div>
    </>
  );
}

export default ProjectsCard;
