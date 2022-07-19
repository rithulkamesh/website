import React from "react";

const ProjectCard: React.FC<ProjectCardType> = ({
  name,
  description,
  image,
  link,
}: ProjectCardType) => {
  return (
    <div>
        
    </div>
  );
};

export default ProjectCard;

type ProjectCardType = {
  name: string;
  description: string;
  image: string;
  link: string;
};
