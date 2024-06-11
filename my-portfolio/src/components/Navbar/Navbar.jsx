import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.name}>FABRIZIO ZEBALLOS</h1>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/about">Github</a>
        </li>
        <li>
          <a href="/contact">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
};
