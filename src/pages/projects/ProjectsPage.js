import React from "react";
import "./Projects.css";
import "../home/Home.css";
import ProjectsCard from "./ProjectsCard";
import { Projectss } from "../../data";

const ProjectsPage = () => {
 

  return (
    <div className="container">
      <h1 className="text-center mt-5">My Projects </h1>
      <p className="text-center">/work</p>

      <div className="row">
        {Projectss.map((project, index) => (
          <ProjectsCard key={index} projectsData={project} />
        ))}
      </div>

     
    </div>
  );
};

export default ProjectsPage;
