import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, liveLink, gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card-wrapper">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />

          {/* Hover icons */}
          <div className="proj-hover-icons">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt />
            </a>
            <a href={gitLink} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default ProjectCard;