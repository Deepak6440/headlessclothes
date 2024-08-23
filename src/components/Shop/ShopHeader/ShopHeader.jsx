import React from 'react'

const ShopHeader = () => {
  return (
    <>
        <section className="page-header">
            <div className="shape"><img src="assets/img/shapes/page-header-shape.png" alt="shape"/></div>
            <div className="container">
                <div className="page-header-content">
                    <h1 className="title">Shop Grid</h1>
                    <h4 className="sub-title">
                        <span className="home">
                            <a href="#">
                                <span>Home</span>
                            </a>
                        </span>
                        <span className="icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span className="inner">
                            <span>Shop Grid</span>
                        </span>
                    </h4>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShopHeader