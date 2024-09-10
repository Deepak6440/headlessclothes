import React from 'react'
import HeaderImg from "../../../assets/img/page-header-shape.png"
const CheckoutHeader = () => {
  return (
    <>
         <section className="page-header">
            <div className="shape"><img src={HeaderImg} alt="shape"/></div>
            <div className="container">
                <div className="page-header-content">
                    <h1 className="title">Checkout</h1>
                    <h4 className="sub-title">
                        <span className="home">
                            <a href="index.html">
                                <span>Home</span>
                            </a>
                        </span>
                        <span className="icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span className="inner">
                            <span>Checkout</span>
                        </span>
                    </h4>
                </div>
            </div>
        </section>
    </>
  )
}

export default CheckoutHeader