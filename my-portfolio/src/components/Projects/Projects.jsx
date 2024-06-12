import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import fitness from "../../assets/coreforce2.png";
import bank from "../../assets/bank2.png";
import back from "../../assets/backend2.png";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
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
    </motion.div>
  );
};
