import React,{useEffect} from 'react'
import BannerProduct from './BannerProduct/BannerProduct'
import { ProductSection } from './ProductSection/ProductSection'
import ProductDescription from './ProductDescription/ProductDescription'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { id } = useParams()
  useEffect(() =>{
    window.scrollTo(0,0)
},[])
  return (
    <>
        <BannerProduct />
        <ProductSection productId={id} />
        <ProductDescription productId={id} />
    </>
  )
}

export default SingleProduct