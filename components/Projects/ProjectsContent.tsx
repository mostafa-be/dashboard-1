import React from "react";
import CardProjectStatus from "./CardProjectStatus";
import LinkCreateProject from "./LinkCreateProject";
import AllProjects from "./AllProjects";
type Props = {
    expanded: boolean;
};

const ProjectsContent = ({expanded}: Props) => {
  return (
    <div className="w-full  px-5   h-full my-10 ">
      <CardProjectStatus />
      <LinkCreateProject />
      <AllProjects expanded={expanded} />
    </div>
  );
};

export default ProjectsContent;
