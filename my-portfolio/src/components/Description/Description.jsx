import styles from "./Description.module.css";

export const Description = () => {
  return (
    <div className={styles["description-container"]}>
      <p className={styles.description}>
        A Fullstack developer with a passion for building and learning.
      </p>
      <a className={styles.btn} href={"#projects"}>
        View Projects
      </a>
    </div>
  );
};
