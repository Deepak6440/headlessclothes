import React from 'react'
import Logo from "../../../assets/img/logo-1.png"
import { Link } from 'react-router-dom'
const PrimaryHeader = () => {
  return (
    <>
    <div className="primary-header">
                <div className="container">
                    <div className="primary-header-inner">
                        <div className="header-logo mobile-logo">
                                <img src={Logo} alt="Logo"/>
                        </div>
                        <div className="header-menu-wrap">
                            <div className="mobile-menu-items">
                                <ul>
                                    <li className="menu-item-has-children active">
                                     <Link to="/">Home</Link>  
                                        {/* <ul>
                                            <li><a href="index.html">Fashion Home</a></li>
                                            <li><a href="index-2.html">Grocery Home</a></li>
                                            <li><a href="index-3.html">Furniture</a></li>
                                        </ul> */}
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="/shop">Shop </Link>
                                        {/* <ul>
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="shop-grid.html">Shop Grid</a></li>
                                            <li><a href="shop-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                        </ul> */}
                                    </li>
                                    <li>
                                        <Link to="/category/women"> Women</Link>
                                    </li>
                                    <li>
                                    <Link to="/category/men"> Men</Link>
                                    </li>
                                   
                                    <li className="menu-item-has-children">
                                    <Link to="/blog"> Blog</Link>
                                       
                                    </li>
                                    <li> <Link to="/contact">Contact </Link> </li>
                                </ul>
                            </div>
                        </div>
                      
                        <div className="header-right-wrap">
                            <div className="header-right">
                                <span>Get 30% Discount Now <span>Sale</span></span>
                                <div className="header-right-item">
                                    <a href="#" className="mobile-side-menu-toggle"><i className="fa-sharp fa-solid fa-bars"></i></a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                   
                </div>
            </div>
    </>
  )
}

export default PrimaryHeader