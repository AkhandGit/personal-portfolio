import colorSharp from "../assets/img/color-sharp.png";
import htmlLogo from "../assets/img/html.svg";
import cssLogo from "../assets/img/css.svg";
import jsLogo from "../assets/img/js.svg";
import reactLogo from "../assets/img/react.svg";
import nodeLogo from "../assets/img/nodejs.svg";
import mongoLogo from "../assets/img/mongo.svg";
import gitLogo from "../assets/img/git.svg";
import pythonLogo from "../assets/img/python.svg";
import expressLogo from "../assets/img/express.svg";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Technologies, tools, and languages I work with.</p>

              <div className="skills-marquee">
                <div className="track">
                  <img src={htmlLogo} alt="HTML" />
                  <img src={cssLogo} alt="CSS" />
                  <img src={jsLogo} alt="JavaScript" />
                  <img src={reactLogo} alt="React" />
                  <img src={nodeLogo} alt="Node.js" />
                  <img src={mongoLogo} alt="MongoDB" />
                  <img src={gitLogo} alt="Git" />
                  <img src={pythonLogo} alt="Python" />
                  <img src={expressLogo} alt="Express" />

                  {/* Duplicate for seamless loop */}
                  <img src={htmlLogo} alt="HTML" />
                  <img src={cssLogo} alt="CSS" />
                  <img src={jsLogo} alt="JavaScript" />
                  <img src={reactLogo} alt="React" />
                  <img src={nodeLogo} alt="Node.js" />
                  <img src={mongoLogo} alt="MongoDB" />
                  <img src={gitLogo} alt="Git" />
                  <img src={pythonLogo} alt="Python" />
                  <img src={expressLogo} alt="Express" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
