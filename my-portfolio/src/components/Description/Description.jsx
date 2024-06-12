import styles from "./Description.module.css";

export const Description = () => {
  return (
    <div className={styles["description-container"]}>
      <p className={styles.description}>
        Un desarrollador Fullstack con pasión por construir y aprender.
      </p>
      <a className={styles.btn} href={"#projects"}>
        Ver Proyectos
      </a>
    </div>
  );
};
