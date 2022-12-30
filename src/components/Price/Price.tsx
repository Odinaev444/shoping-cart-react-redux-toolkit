import styles from './Price.module.scss';

export const Price = ({ value }: { value: number }) => {
  const priceInRub = (value * 70).toFixed(2);

  return (
    <div className={styles.price}>
      {priceInRub} ₽ <span >/шт.</span>
    </div>
  )
}
