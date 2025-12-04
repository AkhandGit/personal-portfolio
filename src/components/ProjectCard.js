import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, img, github, demo, position }) => {
  return (
    <div className={`project-card ${position}`}>
      <div className="proj-imgbx">
        <img src={img} alt={title} />

        {/* Hover icons */}
        <div className="proj-hover-icons">
          <a href={demo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
