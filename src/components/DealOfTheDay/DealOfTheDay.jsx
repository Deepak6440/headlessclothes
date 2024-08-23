import React from 'react'
import Shape from "../../assets/img/Home/asset 31.png"
import Icon from "../../assets/img/Home/asset 32.png"
import dealOne from "../../assets/img/Home/asset 33.jpeg"
import dealTwo from "../../assets/img/Home/asset 34.jpeg"
const DealOfTheDay = () => {
  return (
    <>
        <section className="deal-section pt-100 pb-100">
            <div className="container">
                <div className="row deal-wrap align-items-center">
                    <div className="shape"><img src={Shape} alt="shape"/></div>
                    <div className="col-xl-5 col-lg-12">
                        <div className="deal-content">
                            <div className="section-heading mb-0">
                                <h2 className="section-title">Deal Of the days</h2>
                                <p>Elegant pink origami design three type of dimensional view and <br/>decoration co Great for adding a decorative...</p>
                            </div>
                            <div className="deal-info">
                                <div className="icon">
                                    <img src={Icon} alt="icon"/>
                                </div>
                                <div className="content">
                                    <p>Limited Time offer. THe Deal will expire <br/> one august 18, 2024 </p>
                                </div>
                            </div>
                            <a href="shop.html" className="rr-primary-btn deal-btn">View All Collections</a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12">
                        <div className="row gy-md-0 gy-4">
                            <div className="col-md-6">
                                <div className="shop-item deal-shop">
                                    <div className="shop-thumb">
                                        <div className="overlay"></div>
                                        <img src={dealOne} alt="shop"/>
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
                            <div className="col-md-6">
                                <div className="shop-item deal-shop">
                                    <div className="shop-thumb">
                                        <div className="overlay"></div>
                                        <img src={dealTwo} alt="shop"/>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DealOfTheDay