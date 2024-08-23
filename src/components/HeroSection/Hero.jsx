import React from 'react'
import HeroImage from "../../assets/img/Home/asset 1.png"
import ShapeOne from "../../assets/img/Home/asset 2.png"
import ShapeTwo from "../../assets/img/Home/asset 3.png"


const Hero = () => {
  return (
   <>
    <section className="hero-section">
            <div className="overlay"></div>
            <div className="hero-images">
                <div className="hero-people"><img src={HeroImage} alt="img"/></div>
                <div className="hero-shape"><img src={ShapeOne} alt="shapeOne"/></div>
                <div className="hero-shape-2"><img src={ShapeTwo} alt="shapeTwo"/></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8"></div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="hero-content">
                            <h4 className="sub-title">ummer 22 women’s collection</h4>
                            <h2 className="title">Super COLLECTION <br/>FOR WOMEN</h2>
                            <h5 className="price"><span>From</span>$320.00</h5>
                            <a href="shop.html" className="rr-primary-btn">View Collections</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Hero