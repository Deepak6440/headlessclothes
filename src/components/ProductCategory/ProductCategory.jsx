import React from 'react'
import ProductCatList from './ProductCatList/ProductCatList'
import ProductHeader from './ProductHeader/ProductHeader'
import { useParams } from 'react-router-dom';
const ProductCategory = ({ categoryName }) => {
  const { catName } = useParams();
  return (
   <>
    <ProductHeader categoryName={catName} />
    <ProductCatList categoryNames={[catName]}/>
   </>
  )
}

export default ProductCategory