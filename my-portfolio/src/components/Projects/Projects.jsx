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
      "Una aplicación innovadora que simplifica la programación de citas bancarias, asegurando una experiencia de usuario fluida de principio a fin.",
    link: "https://github.com/FabrizioZeballos/Bank-Application",
  },
  {
    imageSrc: fitness,
    title: "Fitness App",
    description:
      "Una aplicación que revoluciona la industria del fitness con un chat en tiempo real con entrenadores, pagos integrados, rutinas de ejercicio de expertos y un chatbot con IA.",
    link: "https://front-core-force.vercel.app/",
  },
  {
    imageSrc: back,
    title: "Ecommerce App",
    description:
      "Una aplicación de gestión de ecommerce con un backend escalable y una integración fluida, asegurando una experiencia de usuario óptima.",
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
      <h3 className={styles["section-title"]}>Proyectos</h3>
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
