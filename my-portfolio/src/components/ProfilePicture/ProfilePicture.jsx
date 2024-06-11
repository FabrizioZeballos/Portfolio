import styles from "./ProfilePicture.module.css";
import profileImagePath from "../../assets/pfp.jpg";

export const ProfilePicture = () => {
  return (
    <div>
      <div className={styles["img-container"]}>
        <img src={profileImagePath} alt="" className={styles.pfp} />
      </div>
    </div>
  );
};
