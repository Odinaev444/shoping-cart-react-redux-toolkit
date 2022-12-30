import styles from './Title.module.scss';

export const Title = ({ text }: { text: string }) => {
  return (
    <h4 className={styles.title}>
      {text}
    </h4>
  )
}
