import styles from "./Description.module.css";

export const Description = () => {
  return (
    <div className={styles["description-container"]}>
      <p className={styles.description}>
        A Fullstack developer with a passion for building and learning.
      </p>
      <button className={styles.btn}>View Projects</button>
    </div>
  );
};
