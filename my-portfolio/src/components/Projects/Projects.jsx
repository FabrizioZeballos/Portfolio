import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import fitness from "../../assets/coreforce.png";
import bank from "../../assets/bank.png";
import back from "../../assets/backend.png";

const projectData = [
  {
    imageSrc: bank,
    title: "Bank App",
    description:
      "An app simplifying bank appointment scheduling, ensuring a seamless user experience from start to finish.",
    link: "https://github.com/FabrizioZeballos/Bank-Application",
  },
  {
    imageSrc: fitness,
    title: "Fitness App",
    description:
      "An app revolutionizing the fitness industry with real-time trainer advice, integrated payments, expert workout routines, and a chatbot.",
    link: "https://front-core-force.vercel.app/",
  },
  {
    imageSrc: back,
    title: "Ecommerce App",
    description:
      "An ecommerce management app with a scalable backend and seamless integration, ensuring optimal user experience.",
    link: "https://github.com/FabrizioZeballos/Ecommerce-Backend",
  },
  // ... add more project data objects
];

export const Projects = () => {
  return (
    <div>
      <h3 className={styles["section-title"]}>Projects</h3>
      <div className={styles["projects-container"]}>
        {projectData.map((project) => (
          <ProjectCard
            key={1}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
