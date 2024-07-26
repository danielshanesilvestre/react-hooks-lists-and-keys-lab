import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  let projectsElements = projects.map((project) => {
    return (
      <ProjectItem key={project.name} name={project.name} about={project.about} technologies={project.technologies} />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsElements}</div>
    </div>
  );
}

export default ProjectList;
