import React from 'react'

const ShopProducts = () => {
  return (
     <>
        <div className="col-lg-9 col-md-12">
                        <div className="shop-grid-left">
                            <div className="top-grid-content">
                                <div className="shop-tab-nav">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                                <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="15" width="5" height="3" fill="currentColor"/>
                                                    <rect x="15" y="7" width="5" height="3" fill="currentColor"/>
                                                    <rect x="15" y="14" width="5" height="3" fill="currentColor"/>
                                                    <rect x="7.71875" width="5" height="3" fill="currentColor"/>
                                                    <rect x="7.71875" y="7" width="5" height="3" fill="currentColor"/>
                                                    <rect x="7.71875" y="14" width="5" height="3" fill="currentColor"/>
                                                    <rect width="5" height="3" fill="currentColor"/>
                                                    <rect y="7" width="5" height="3" fill="currentColor"/>
                                                    <rect y="14" width="5" height="3" fill="currentColor"/>
                                                </svg>
                                                
                                            </button>
                                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5.71875" width="14.2857" height="3" fill="currentColor"/>
                                                    <rect x="5.71875" y="7" width="14.2857" height="3" fill="currentColor"/>
                                                    <rect x="5.71875" y="14" width="14.2857" height="3" fill="currentColor"/>
                                                    <rect width="3.80952" height="3" fill="currentColor"/>
                                                    <rect y="7" width="3.80952" height="3" fill="currentColor"/>
                                                    <rect y="14" width="3.80952" height="3" fill="currentColor"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </nav>
                                    <span>Showing 1–12 of 88 results</span>
                                </div>
                                <div className="nice-select shop-select country" tabindex="0">
                                    <span className="current">Default Shorting</span>
                                    <ul className="list">
                                        <li data-value="" className="option selected focus">Default Shorting</li>
                                        <li data-value="vdt" className="option">Most Popular</li>
                                        <li data-value="can" className="option">Date</li>
                                        <li data-value="uk" className="option">Tranding</li>
                                        <li data-value="dk" className="option">Featured</li>
                                        <li data-value="dl" className="option">Discounted</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row gy-4">
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-1.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">Monica Diara Party Dress</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$250.00</span>$157.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-2.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">Onima Black Flower Sandal</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$450.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-3.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">Poncho Sweater international</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$550.00</span>$427.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-7.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-8.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-9.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-10.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-11.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-12.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-13.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-14.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="shop-item">
                                                <div className="shop-thumb">
                                                    <div className="overlay"></div>
                                                    <img src="assets/img/shop/shop-15.png" alt="shop"/>
                                                    <span className="sale">New</span>
                                                    <ul className="shop-list">
                                                        <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shop-content">
                                                    <span className="category">Levi’s Cotton</span>
                                                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                    <div className="review-wrap">
                                                        <ul className="review">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                        <span>(15 Reviews)</span>
                                                    </div>
                                                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="grid-shop-items">
                                        <div className="shop-item grid-shop">
                                            <div className="shop-thumb">
                                                <div className="overlay"></div>
                                                <img src="assets/img/shop/shop-1.png" alt="shop"/>
                                                <span className="sale">New</span>
                                                <ul className="shop-list">
                                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <span className="category">Levi’s Cotton</span>
                                                <h3 className="title"><a href="shop-details.html">Monica Diara Party Dress</a></h3>
                                                <p>Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.</p>
                                                <div className="review-wrap">
                                                    <ul className="review">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(15 Reviews)</span>
                                                </div>
                                                <span className="price"> <span className="offer">$250.00</span>$157.00</span>
                                            </div>
                                        </div>
                                        <div className="shop-item grid-shop">
                                            <div className="shop-thumb">
                                                <div className="overlay"></div>
                                                <img src="assets/img/shop/shop-2.png" alt="shop"/>
                                                <span className="sale">New</span>
                                                <ul className="shop-list">
                                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <span className="category">Levi’s Cotton</span>
                                                <h3 className="title"><a href="shop-details.html">Onima Black Flower Sandal</a></h3>
                                                <p>Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.</p>
                                                <div className="review-wrap">
                                                    <ul className="review">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(15 Reviews)</span>
                                                </div>
                                                <span className="price"> <span className="offer">$250.00</span>$157.00</span>
                                            </div>
                                        </div>
                                        <div className="shop-item grid-shop">
                                            <div className="shop-thumb">
                                                <div className="overlay"></div>
                                                <img src="assets/img/shop/shop-3.png" alt="shop"/>
                                                <span className="sale">New</span>
                                                <ul className="shop-list">
                                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <span className="category">Levi’s Cotton</span>
                                                <h3 className="title"><a href="shop-details.html">Poncho Sweater International</a></h3>
                                                <p>Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.</p>
                                                <div className="review-wrap">
                                                    <ul className="review">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(15 Reviews)</span>
                                                </div>
                                                <span className="price"> <span className="offer">$250.00</span>$157.00</span>
                                            </div>
                                        </div>
                                        <div className="shop-item grid-shop">
                                            <div className="shop-thumb">
                                                <div className="overlay"></div>
                                                <img src="assets/img/shop/shop-4.png" alt="shop"/>
                                                <span className="sale">New</span>
                                                <ul className="shop-list">
                                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <span className="category">Levi’s Cotton</span>
                                                <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                                                <p>Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.</p>
                                                <div className="review-wrap">
                                                    <ul className="review">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(15 Reviews)</span>
                                                </div>
                                                <span className="price"> <span className="offer">$250.00</span>$157.00</span>
                                            </div>
                                        </div>
                                        <div className="shop-item grid-shop">
                                            <div className="shop-thumb">
                                                <div className="overlay"></div>
                                                <img src="assets/img/shop/shop-1.png" alt="shop"/>
                                                <span className="sale">New</span>
                                                <ul className="shop-list">
                                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <span className="category">Levi’s Cotton</span>
                                                <h3 className="title"><a href="shop-details.html">Monica Diara Party Dress</a></h3>
                                                <p>Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.</p>
                                                <div className="review-wrap">
                                                    <ul className="review">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(15 Reviews)</span>
                                                </div>
                                                <span className="price"> <span className="offer">$250.00</span>$157.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     </>
  )
}

export default ShopProducts