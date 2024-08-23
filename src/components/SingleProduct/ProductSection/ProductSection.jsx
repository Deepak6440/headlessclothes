import React from 'react'

export const ProductSection = () => {
  return (
    <>
        <section className="shop-section single pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 product-details-wrap">
                        <div className="product-slider-wrap">
                            <div className="swiper product-gallary-thumb">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="thumb-item">
                                            <img src="assets/img/shop/shop-thumb-1.png" alt="shop"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="thumb-item">
                                            <img src="assets/img/shop/shop-thumb-2.png" alt="shop"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="thumb-item">
                                            <img src="assets/img/shop/shop-thumb-3.png" alt="shop"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper product-gallary">
                                <span className="sale">Sale</span>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="gallary-item">
                                            <img src="assets/img/shop/shop-slider-1.jpg" alt="shop"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallary-item">
                                            <img src="assets/img/shop/shop-slider-2.jpg" alt="shop"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallary-item">
                                            <img src="assets/img/shop/shop-slider-3.jpg" alt="shop"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-nav-next"><i className="las la-arrow-right"></i></div>
                                <div className="swiper-nav-prev"><i className="las la-arrow-left"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-details">
                            <div className="product-info">
                                <div className="product-inner">
                                    <span className="category">Modern Dress</span>
                                    <h3 className="title">Poncho Sweater International</h3>
                                    <div className="rating-wrap">
                                        <ul className="rating">
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                        </ul>
                                        <span>(1 customer review)</span>
                                    </div>
                                    <h4 className="price">$260.00 <span>$360.00</span></h4>
                                    <div className="product-desc-wrap">
                                        <p className="desc">Eget taciti odio cum habitant egestas conubia turpis phasellus, ante parturient <br/> donec duis primis nam faucibus augue malesuada venenatis</p>
                                        <span className="view-text"><i className="fa-sharp fa-regular fa-eye"></i>28 people are viewing this right now</span>
                                    </div>
                                    <div className="item-left-line">
                                        <span>Only 15 items left in stock!</span>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="details-list">
                                        <li><i className="fa-light fa-arrow-right-arrow-left"></i>Free returns</li>
                                        <li><i className="fa-light fa-truck"></i>Free shipping via DHL, fully insured</li>
                                        <li><i className="fa-light fa-circle-check"></i>All taxes and customs duties included</li>
                                    </ul>
                                </div>
                                <div className="product-btn">
                                    <form>
                                        <input type="number" name="age" id="age" min="1" max="100" step="1" value="1"/>
                                    </form>
                                    <div className="cart-btn-wrap-2"><a href="#" className="rr-primary-btn cart-btn">Add To Cart</a></div>
                                </div>
                                <a href="#" className="shop-details-btn rr-primary-btn">Buy The Item Now</a>
                                <ul className="product-meta">
                                    <li><a href="#">Compare</a></li>
                                    <li><a href="#">Ask a question</a></li>
                                    <li><a href="#">Share</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
