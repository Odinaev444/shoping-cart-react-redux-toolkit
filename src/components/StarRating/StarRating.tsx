import styles from './StarRating.module.scss';
import Rating from '../../../public/icons/star.svg';

export const StarRating = ({ count }: { count: number }) => {
  const star = [1, 2, 3, 4, 5]
  const roundedCount = Math.round(count);

  return (
    <>
      {
        star.map(el => <Rating
          key={el}
          className={
            el <= roundedCount ? styles['star-active'] : styles['star-default']
          } />
        )
      }
    </>
  )
}
