import Image from "next/image";
import { Hot } from "../Hot";

import styles from "./Photo.module.scss";

export const Photo = ({
  isHit,
  imageUrl,
}: {
  isHit: boolean;
  imageUrl: string;
}) => {
  return (
    <div className={styles.image}>
      <Image src={imageUrl} alt="product" width={220} height={220} priority />
      {isHit ? <Hot additionalStyles={styles.hit} /> : null}
    </div>
  );
};
