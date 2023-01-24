import { useState } from "react";

import styles from "./AddToCartButton.module.scss";
import Increase from "../../assets/icons/plus.svg";
import Decrease from "../../assets/icons/minus.svg";
import { Product } from "../../models/Product";
import { useAppDispatch } from "../../store/hooks";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/reducers/cartSlice";

export const AddToCartButton = ({
  item,
  existInCard,
}: {
  item: Product;
  existInCard: boolean;
}) => {
  const [count, setCount] = useState<number>(1);
  const [itemInCard, setItemInCard] = useState<boolean>(existInCard);
  const dispatch = useAppDispatch();

  const addToCard = () => {
    setItemInCard((prev) => !prev);
    if (!itemInCard)
      dispatch(addItemToCart({ product: item, quantity: count }));
    else dispatch(removeItemFromCart({ id: item.id }));
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () =>
    setCount((prev) => (prev === 1 ? prev : count - 1));

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${
          itemInCard ? styles["button-active"] : ""
        }`}
        onClick={addToCard}
      >
        {itemInCard ? "Added" : "Add to cart"}
      </button>
      {!itemInCard ? (
        <div className={styles.counter}>
          <div>
            <Decrease onClick={decrementCount} />
            <span>{count}</span>
            <Increase onClick={incrementCount} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
