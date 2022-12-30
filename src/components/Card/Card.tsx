import styles from './Card.module.scss';
import { Photo } from '../Photo';
import { Category } from '../Category';
import { Title } from '../Title';
import { Price } from '../Price';
import { AddToCartButton } from '../AddToCartButton';
import { FavoriteButton } from '../FavoriteButton';
import { Review } from '../Review';
import { StarRating } from '../StarRating';
import { Product } from '../../models/Product';
import { useAppSelector } from '../../store/hooks';

export const Card = ({ item }: { item: Product }) => {

  const cart = useAppSelector(state => state.cart)
  const favorite = useAppSelector(state => state.favorite)

  const itemExistInCard = cart.items.find(el => el.product.id === item.id) !== undefined ? true : false;
  const itemExistInFavorite = favorite.items.find(el => el.id === item.id) !== undefined ? true : false;

  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <Photo imageUrl={item.image} isHit={item.rating.count > 300} />
      </div>
      <div className={styles['review-row']}>
        <Category name={item.category} />
        <div className={styles['review']}>
          <StarRating count={item.rating.rate} />
          <Review count={item.rating.count} />
        </div>
      </div>
      <Title text={item.title} />
      <Price value={item.price} />
      <div className={styles.bottom}>
        <AddToCartButton item={item} existInCard={itemExistInCard} />
        <FavoriteButton item={item} existInFavorite={itemExistInFavorite} />
      </div>
    </div>
  )
}