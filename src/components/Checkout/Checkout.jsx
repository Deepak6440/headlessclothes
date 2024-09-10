import React,{useEffect} from 'react'
import CheckoutHeader from './CheckoutHeader/CheckoutHeader'
import { CheckoutForms } from './CheckoutForms/CheckoutForms'

const Checkout = () => {
  useEffect(() =>{
    window.scrollTo(0,50)
},[])
  return (
    <>
        <CheckoutHeader/>
        <CheckoutForms/>
    </>
  )
}

export default Checkout