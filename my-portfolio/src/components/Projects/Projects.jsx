import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import fitness from "../../assets/coreforce.png";
import bank from "../../assets/bank.png";
import back from "../../assets/backend.png";

const projectData = [
  {
    imageSrc: bank,
    title: "Project One",
    description: "A brief description of project one.",
    link: "https://www.example.com/project-one",
  },
  {
    imageSrc: fitness,
    title: "Project Two",
    description: "A brief description of project two.",
    link: "https://www.example.com/project-one",
  },
  {
    imageSrc: back,
    title: "Project Three",
    description: "A brief description of project two.",
    link: "https://www.example.com/project-one",
  },
  // ... add more project data objects
];

export const Projects = () => {
  return (
    <div className={styles["projects-container"]}>
      {projectData.map(
        (project) => (
          console.log(project.imageSrc),
          (
            <ProjectCard
              key={1}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          )
        )
      )}
    </div>
  );
};
