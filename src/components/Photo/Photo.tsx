import Image from 'next/image';
import { Hit } from '../Hit';

import styles from './Photo.module.scss';

export const Photo = ({ isHit, imageUrl }: { isHit: boolean, imageUrl: string }) => {
  return (
    <div className={styles.image}>
      <Image
        src={imageUrl}
        alt="product"
        width={220}
        height={220}
        priority
      />
      {isHit ? <Hit /> : null}
    </div>
  )
}
