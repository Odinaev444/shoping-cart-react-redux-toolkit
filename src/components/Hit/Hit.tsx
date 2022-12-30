import styles from './Hit.module.scss';
import RectangleLeft from '../../../public/icons/rectangle.svg';
import RectangleRight from '../../../public/icons/rectangle-180.svg';

export const Hit = () => {
  return (
    <div className={styles.hit}>
      <RectangleLeft className={styles['rectangle-left']} />
      <div className={styles['hit-box']}>
        Хит
      </div>
      <RectangleRight className={styles['rectangle-right']} />
    </div>
  )
}
