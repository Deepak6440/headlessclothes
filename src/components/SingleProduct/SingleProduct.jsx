import React,{useEffect} from 'react'
import BannerProduct from './BannerProduct/BannerProduct'
import { ProductSection } from './ProductSection/ProductSection'
import ProductDescription from './ProductDescription/ProductDescription'

const SingleProduct = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
},[])
  return (
    <>
        <BannerProduct />
        <ProductSection />
        <ProductDescription />
    </>
  )
}

export default SingleProduct