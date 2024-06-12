import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <p className={styles["footer-txt"]}>
        Diseñado y desarrollado con 🤍 por Fabrizio
      </p>
    </div>
  );
};
