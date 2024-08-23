import React from 'react'
import collectionOne from "../../assets/img/Home/asset 18.png"
import collectionTwo from "../../assets/img/Home/asset 19.png"
import collectionThree from "../../assets/img/Home/asset 20.png"
const Collections = () => {
  return (
    <>
    
    <section className="collect-section pb-100">
            <div className="container">
                <div className="row gy-lg-0 gy-4">
                    <div className="col-lg-6">
                        <div className="collect-item">
                            <span>1500+ Products</span>
                            <h3 className="title">Women Collections</h3>
                            <p>This is genuinely the first theme i bought for which i did not had <br/> to write one line of code.</p>
                            <ul className="collect-list">
                                <li><a href="shop.html">Blazer</a></li>
                                <li><a href="shop.html">Blouses & Shirts</a></li>
                                <li><a href="shop.html">Dresser</a></li>
                                <li><a href="shop.html">Jeans</a></li>
                                <li><a href="shop.html">Knits</a></li>
                                <li><a href="shop.html">Pants</a></li>
                                <li><a href="shop.html">Skirts</a></li>
                                <li><a href="shop.html">Suits</a></li>
                                <li><a href="shop.html">Sweatshirts & Hoodie</a></li>
                                <li><a href="shop.html">T-Shirts</a></li>
                                <li><a href="shop.html">Tops & Bodysuits</a></li>
                            </ul>
                            <div className="men"><img src={collectionOne} alt="discount"/></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="collect-items">
                            <div className="collect-item item-1">
                                <span>1500+ Products</span>
                                <h3 className="title">men Collections</h3>
                                <ul className="collect-list">
                                    <li><a href="shop.html">Blazer</a></li>
                                    <li><a href="shop.html">Blouses & Shirts</a></li>
                                    <li><a href="shop.html">Dresser</a></li>
                                    <li><a href="shop.html">Jeans</a></li>
                                </ul>
                                <div className="men"><img src={collectionTwo} alt="discount"/></div>
                            </div>
                            <div className="collect-item item-2">
                                <span>1500+ Products</span>
                                <h3 className="title">Top Accessories</h3>
                                <ul className="collect-list">
                                    <li><a href="shop.html">Blazer</a></li>
                                    <li><a href="shop.html">Blouses & Shirts</a></li>
                                    <li><a href="shop.html">Dresser</a></li>
                                    <li><a href="shop.html">Jeans</a></li>
                                </ul>
                                <div className="men"><img src={collectionThree} alt="discount"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Collections