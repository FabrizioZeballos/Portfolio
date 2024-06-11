import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <img src={imageSrc} alt="" className={styles.image} />
      </div>
      <h2 className={styles["project-title"]}>{title}</h2>
      <p className={styles["project-txt"]}>{description}</p>
      <a
        href={link}
        target="blank"
        rel="noopener noreferrer"
        className={styles.links}
      >
        {title === "Fitness App" ? "Website" : "Github"}
      </a>
    </div>
  );
};
