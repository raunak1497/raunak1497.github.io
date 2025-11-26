import React, { useContext } from "react";
import "../StartupProjects/StartupProjects.scss";
import { aiMlProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function AIMLProjects() {
  const { isDark } = useContext(StyleContext);

  if (!aiMlProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="aiml-projects">
        <h1 className="skills-heading">{aiMlProjects.title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {aiMlProjects.subtitle}
        </p>

        <div className="projects-container">
          {aiMlProjects.projects.map((project, i) => (
            <div
              key={i}
              className={
                isDark
                  ? "dark-mode project-card project-card-dark"
                  : "project-card project-card-light"
              }
            >
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {project.projectName}
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  {project.projectDesc}
                </p>
                <div className="project-card-footer">
                  {project.footerLink?.map((link, idx) => (
                    <span
                      key={idx}
                      className={isDark ? "dark-mode project-tag" : "project-tag"}
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      {link.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}