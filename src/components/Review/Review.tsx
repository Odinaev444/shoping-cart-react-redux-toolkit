import styles from './Review.module.scss';

export const Review = ({ count }: { count: number }) => {

  return (
    <span className={styles.review}>
      {count} отзыва
    </span>
  )
}
