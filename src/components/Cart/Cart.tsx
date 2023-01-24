import styles from "./Cart.module.scss";
import Basket from "../../assets/icons/basket.svg";
import { useAppSelector } from "../../store/hooks";

export const Cart = () => {
  const total = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className={styles.cart}>
      <Basket />
      <div className={styles.counter}>{total}</div>
    </div>
  );
};
