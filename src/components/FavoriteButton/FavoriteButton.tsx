import { useState } from "react";

import styles from "./FavoriteButton.module.scss";
import FavoriteDefault from "../../assets/icons/favorite.svg";
import FavoriteActive from "../../assets/icons/favorite-active.svg";
import { useAppDispatch } from "../../store/hooks";
import { Product } from "../../models/Product";
import {
  addItemToFavorite,
  removeItemFromFavorite,
} from "../../store/reducers/favoriteSlice";

export const FavoriteButton = ({
  item,
  existInFavorite,
}: {
  item: Product;
  existInFavorite: boolean;
}) => {
  const [itemInFavorite, setItemInFavorite] = useState(existInFavorite);
  const dispatch = useAppDispatch();

  const addToFavorite = () => {
    setItemInFavorite((prev) => !prev);
    if (!itemInFavorite) dispatch(addItemToFavorite(item));
    else dispatch(removeItemFromFavorite({ id: item.id }));
  };

  if (itemInFavorite)
    return (
      <FavoriteActive onClick={addToFavorite} className={styles.favorite} />
    );

  return (
    <FavoriteDefault onClick={addToFavorite} className={styles.favorite} />
  );
};
