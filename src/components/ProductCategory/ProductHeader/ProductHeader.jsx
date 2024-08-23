import React, { useEffect } from 'react'

const ProductHeader = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[])
  return (
    <>
        <section className="page-header">
            <div className="shape"><img src="assets/img/shapes/page-header-shape.png" alt="shape"/></div>
            <div className="container">
                <div className="page-header-content">
                    <h1 className="title">Shop</h1>
                    <h4 className="sub-title">
                        <span className="home">
                            <a href="#">
                                <span>Home</span>
                            </a>
                        </span>
                        <span className="icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span className="inner">
                            <span>Shop</span>
                        </span>
                    </h4>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductHeader