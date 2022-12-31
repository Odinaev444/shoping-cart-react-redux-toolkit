import styles from './Price.module.scss';

export const Price = ({ value }: { value: number }) => {

  return (
    <div className={styles.price}>
      {value} $ <span >/pcs.</span>
    </div>
  )
}
