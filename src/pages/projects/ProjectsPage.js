import React from "react";
import "./Projects.css";
import "../home/Home.css";
import ProjectsCard from "./ProjectsCard";

const ProjectsPage = ({ projectsData}) => {
 
console.log(projectsData)
  return (
    <div className="container">
      <h3 className="text-center mt-3">/Work</h3>
      <p className="text-center">Selected Work I have done in the past</p>
      <div className="row">
      {projectsData.map((project) => (
        <ProjectsCard  project={project} />
      ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
