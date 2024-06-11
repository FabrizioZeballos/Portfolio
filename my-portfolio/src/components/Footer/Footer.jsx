import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <p className={styles["footer-txt"]}>
        Designed and built with 🤍 by Fabrizio
      </p>
    </div>
  );
};
