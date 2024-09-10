import React from 'react'
import HeaderImg from "../../../assets/img/page-header-shape.png"
import { Link } from 'react-router-dom'
const WishlistHeader = () => {
  return (
   <>
     <section className="page-header">
            <div className="shape"><img src={HeaderImg} alt="shape"/></div>
            <div className="container">
                <div className="page-header-content">
                    <h1 className="title">Wishlist</h1>
                    <h4 className="sub-title">
                        <span className="home">
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </span>
                        <span className="icon"><i className="fa-solid fa-angle-right"></i></span>
                        <span className="inner">
                            <span>Wishlist</span>
                        </span>
                    </h4>
                </div>
            </div>
        </section>
   </>
  )
}

export default WishlistHeader