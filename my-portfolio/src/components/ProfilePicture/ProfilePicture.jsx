import styles from "./ProfilePicture.module.css";
import profileImagePath from "../../assets/pfp2.png";

export const ProfilePicture = () => {
  return (
    <div className={styles["container"]}>
      <div className={`${styles.element} ${styles.pulse}`}></div>
      <div className={styles["img-container"]}>
        <img src={profileImagePath} alt="" className={styles.pfp} />
      </div>
    </div>
  );
};
