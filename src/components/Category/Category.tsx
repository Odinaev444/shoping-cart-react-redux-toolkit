import styles from './Category.module.scss';

export const Category = ({ name }: { name: string }) => {
  return (
    <h4 className={styles.category}>{name}</h4>
  )
}
