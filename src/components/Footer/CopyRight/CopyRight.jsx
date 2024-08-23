import React from 'react'
import paymentImg from "../../../assets/img/Home/asset 42.png"
const CopyRight = () => {
  return (
    <>
     <div className="copyright-area">
                <div className="container">
                    <div className="row copyright-content">
                        <div className="col-lg-6">
                            <div className="footer-img-wrap">
                                <span>Payment System:</span>
                                <div className="footer-img"><a href="#"><img src={paymentImg} alt="img"/></a></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p>Copyright & Design 2024 <span>©Roiser</span>. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
    </>
  )
}

export default CopyRight