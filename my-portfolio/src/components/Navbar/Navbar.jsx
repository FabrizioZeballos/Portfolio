import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.name}>
        FABRIZIO <span>ZEBALLOS</span>
      </h1>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a
            href="https://github.com/FabrizioZeballos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/zeballosfab"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};
