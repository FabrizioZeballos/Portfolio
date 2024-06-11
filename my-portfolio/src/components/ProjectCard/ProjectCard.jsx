import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <img src={imageSrc} alt="" className={styles.image} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="">{link}</a>
    </div>
  );
};
