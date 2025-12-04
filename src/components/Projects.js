import { useState } from "react";
import ProjectCard from "./ProjectCard";
import proj1 from "../assets/img/project-img1.png";
import proj2 from "../assets/img/project-img2.png";
import proj3 from "../assets/img/project-img3.png";
import proj4 from "../assets/img/project-img1.png";
import "../App.css";

export const Projects = () => {
  const projects = [
    { title: "Project 1", imgUrl: proj1, github: "#", demo: "#" },
    { title: "Project 2", imgUrl: proj2, github: "#", demo: "#" },
    { title: "Project 3", imgUrl: proj3, github: "#", demo: "#" },
    { title: "Project 4", imgUrl: proj4, github: "#", demo: "#" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="project">
      <h2>Projects</h2>
      <p>Here are some of the projects I’ve worked on.</p>

      <div className="carousel-container">

        {/* Left arrow */}
        <button className="carousel-btn left" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel">
          {projects.map((proj, index) => {
            let positionClass = "hidden";

            if (index === current) positionClass = "active";
            else if (index === (current - 1 + projects.length) % projects.length)
              positionClass = "prev";
            else if (index === (current + 1) % projects.length)
              positionClass = "next";

            return (
              <ProjectCard
                key={index}
                title={proj.title}
                img={proj.imgUrl}
                github={proj.github}
                demo={proj.demo}
                position={positionClass}
              />
            );
          })}
        </div>

        {/* Right arrow */}
        <button className="carousel-btn right" onClick={nextSlide}>
          ›
        </button>

      </div>
    </section>
  );
};
export default Projects;