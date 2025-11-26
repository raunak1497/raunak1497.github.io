import React, { useContext } from "react";
import "../StartupProjects/StartupProjects.scss";
import { minorProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function MinorProjects() {
  const { isDark } = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) return;
    window.open(url, "_blank").focus();
  }

  if (!minorProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="minor-projects">
        <h1 className="skills-heading">{minorProjects.title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {minorProjects.subtitle}
        </p>

        <div className="projects-container">
          {minorProjects.projects.map((project, i) => (
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
                      onClick={() => openUrlInNewTab(link.url)}
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