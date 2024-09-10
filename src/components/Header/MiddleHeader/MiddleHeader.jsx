import React from 'react'
import Logo from "../../../assets/img/logo-1.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const MiddleHeader = () => {
    
    const cartItems = useSelector((state) => state.cart.cartItems);
    // Calculate the total quantity and total price
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('$', '')), 0).toFixed(2);

    const wishlistItems = useSelector((state) => state.cart.wishlistItems); // Access the wishlist items
    const wishlistCount = wishlistItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <>
    
    <div className="header-middle">
                <div className="container">
                    <div className="header-middle-inner">
                        <div className="header-middle-left">
                            <div className="header-logo d-lg-block">
                                <Link to="/"> <img src={Logo} alt="Logo"/> </Link>   
                            </div>
                            <div className="category-form-wrap">
                                <div className="nice-select select-control country" tabIndex="0">
                                    <span className="current">ALL Categories</span>
                                    <ul className="list">
                                        <li data-value="" className="option selected focus">ALL Categories</li>
                                        <li data-value="vdt" className="option">Fashion</li>
                                        <li data-value="can" className="option">Organic</li>
                                        <li data-value="uk" className="option">Furniture</li>
                                    </ul>
                                </div>
                                <form className="header-form" action="mail.php">
                                    <input className="form-control" type="text" name="search" placeholder="Search here..." />
                                    <button className="submit rr-primary-btn">Search here</button>
                                </form>
                            </div>
                        </div>
                        <div className="header-middle-right">
                            <ul className="contact-item-list">
                                <li>
                                    <div className="content">
                                        <span>Call Us Now:</span>
                                        <a className="number" href="tel:+25821592159">+(258) 2159-2159</a>
                                    </div>
                                    <a href="#" className="icon">
                                        <i className="fa-regular fa-phone"></i>
                                    </a>
                                </li>
                                <li>
                                    <Link to="/wishlist" className="icon">
                                        <i className="fa-sharp fa-regular fa-heart"></i>
                                        <span>{wishlistCount}</span>
                                   </Link>
                                </li>
                                <li>
                                    <Link to="/cart" className="icon">
                                        <i className="fa-light fa-bag-shopping"></i>
                                        <span>{cartCount}</span>
                                    </Link>
                                    <div className="content">
                                        <span>Your cart,</span>
                                        <h5 className="number">{totalPrice}</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MiddleHeader