import styles from './Hot.module.scss';
import RectangleLeft from '../../../public/icons/rectangle.svg';
import RectangleRight from '../../../public/icons/rectangle-180.svg';

export const Hot = () => {
  return (
    <div className={styles.hit}>
      <RectangleLeft className={styles['rectangle-left']} />
      <div className={styles['hit-box']}>
        Hot
      </div>
      <RectangleRight className={styles['rectangle-right']} />
    </div>
  )
}
