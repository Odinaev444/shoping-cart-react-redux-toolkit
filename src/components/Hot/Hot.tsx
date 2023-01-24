import styles from "./Hot.module.scss";
import RectangleLeft from "../../assets/icons/rectangle.svg";
import RectangleRight from "../../assets/icons/rectangle-180.svg";

export const Hot = ({ additionalStyles }: { additionalStyles?: string }) => {
  return (
    <div className={`${styles.hit} ${additionalStyles}`}>
      <RectangleLeft className={styles["rectangle-left"]} />
      <div className={styles["hit-box"]}>Hot</div>
      <RectangleRight className={styles["rectangle-right"]} />
    </div>
  );
};
