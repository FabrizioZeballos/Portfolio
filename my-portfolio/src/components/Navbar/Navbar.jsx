import styles from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.name}>
        FABRIZIO <span>ZEBALLOS</span>
      </h1>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="#projects">Proyectos</a>
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
      <div className={styles["contact-links"]}>
        <a
          href="https://github.com/FabrizioZeballos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/zeballosfab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};
