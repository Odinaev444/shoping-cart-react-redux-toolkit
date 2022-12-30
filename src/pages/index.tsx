import { useEffect } from 'react'
import Card from '../components/Card';
import { Product } from '../models/Product';
import { useGetProductsByLimitQuery } from '../services/ProductService';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addProduct } from '../store/reducers/productSlice';


export default function Homes() {

  const products = useAppSelector(state => state.product);

  const getProducts = useGetProductsByLimitQuery(10);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getProducts.isSuccess) dispatch(addProduct(getProducts.data))
  }, [getProducts])

  if (getProducts.isLoading) return 'Loading...';

  return (
    <>
      {
        products.map((item: Product) => {
          return (
            <div key={item.id}>
              <Card item={item} />
            </div>
          )
        })
      }
    </>
  )
}
