import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
   <>
   <div className="top-bar">
                <div className="container">
                    <div className="top-bar-inner">
                        <div className="top-bar-left">
                            <ul className="top-left-list">
                                <li> <Link to="/about"> About </Link> </li>
                                <li> <Link to="/myaccount"> My Account </Link> </li>
                                <li> <Link to="/Wishlist"> Wishlist </Link> </li>
                                <li> <Link to="/checkout"> Checkout </Link> </li>
                            </ul>
                        </div>
                        <div className="top-bar-middle">
                            <span>Free shipping for all orders of 150$</span>
                        </div>
                        <div className="top-bar-right">
                            <ul className="top-right-list">
                                <li> <Link to="/conatct" > Store Location </Link></li>
                                <li>
                                    <div className="nice-select select-control country" tabIndex="0">
                                        <span className="current">Language</span>
                                        <ul className="list">
                                            <li data-value="" className="option selected focus">Language</li>
                                            <li data-value="vdt" className="option">English</li>
                                            <li data-value="can" className="option">Bangla</li>
                                            <li data-value="uk" className="option">Arabic</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="nice-select select-control select-2 country" tabIndex="0">
                                        <span className="current">Currency</span>
                                        <ul className="list">
                                            <li data-value="" className="option selected focus">Currency</li>
                                            <li data-value="vdt" className="option">Doller</li>
                                            <li data-value="can" className="option">Rupee</li>
                                            <li data-value="uk" className="option">Taka</li>
                                        </ul>
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

export default Topbar