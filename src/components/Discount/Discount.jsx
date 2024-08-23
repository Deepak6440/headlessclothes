import React from 'react'
import DiscountOne from "../../assets/img/Home/asset 11.png"
import DiscountTwo from "../../assets/img/Home/asset 12.png"
import DiscountThree from "../../assets/img/Home/asset 13.png"
import Shape from "../../assets/img/Home/asset 10.png"
const Discount = () => {
  return (
    <>
    <section className="discount-section overflow-hidden pb-100">
            <div className="row gy-lg-0 gy-4">
                <div className="col-lg-4 col-md-6">
                    <div className="discount-item item-1">
                        <div className="product-overlay"></div>
                        <div className="shape"><img src={Shape} alt="shape"/></div>
                        <div className="content">
                            <span>Special 50% Disocunt</span>
                            <h3 className="title">The Latest Men’s Trends <br/> This Season</h3>
                            <a href="#"><i className="fa-regular fa-plus"></i>View Collections</a>
                        </div>
                        <div className="men"><img src={DiscountOne} alt="img"/></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="discount-item">
                        <div className="product-overlay"></div>
                        <div className="shape"><img src={Shape} alt="shape"/></div>
                        <div className="men"><img src={DiscountTwo} alt="img"/></div>
                        <div className="content">
                            <span>Special 50% Disocunt</span>
                            <h3 className="title">Latest Kids Trends <br/>This Season</h3>
                            <a href="#"><i className="fa-regular fa-plus"></i>View Collections</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="discount-item">
                        <div className="product-overlay"></div>
                        <div className="shape"><img src={Shape} alt="shape"/></div>
                        <div className="men"><img src={DiscountThree} alt="img"/></div>
                        <div className="content">
                            <span>Special 50% Disocunt</span>
                            <h3 className="title">Latest Women’s Trends <br/>This Season</h3>
                            <a href="#"><i className="fa-regular fa-plus"></i>View Collections</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Discount