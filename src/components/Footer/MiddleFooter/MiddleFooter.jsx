import React from 'react'
import icon1 from "../../../assets/img/Home/asset 38.png"
import icon2 from "../../../assets/img/Home/asset 39.png"
import icon3 from "../../../assets/img/Home/asset 40.png"
import icon4 from "../../../assets/img/Home/asset 41.png"
const MiddleFooter = () => {
  return (
    <>
     <div className="footer-items">
                    <div className="footer-item">
                        <div className="icon">
                            <img src={icon1} alt="icon"/>
                        </div>
                        <div className="content">
                            <h4 className="title">Free Shipping</h4>
                            <span>Free shipping on orders over $65</span>
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="icon">
                            <img src={icon2} alt="icon"/>
                        </div>
                        <div className="content">
                            <h4 className="title">Free Returns</h4>
                            <span>30-days free return polic</span>
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="icon">
                            <img src={icon3} alt="icon"/>
                        </div>
                        <div className="content">
                            <h4 className="title">Secured Payments</h4>
                            <span>We accept all major credit card</span>
                        </div>
                    </div>
                    <div className="footer-item item-2">
                        <div className="icon">
                            <img src={icon4} alt="icon"/>
                        </div>
                        <div className="content">
                            <h4 className="title">Customer Service</h4>
                            <span>Top notch customer service</span>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default MiddleFooter