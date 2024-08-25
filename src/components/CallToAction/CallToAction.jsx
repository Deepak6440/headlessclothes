import React from 'react'
import CTA from "../../assets/img/Home/asset43.jpeg"
export const CallToAction = () => {
  return (
    <>
     <section className="cta-section pt-100 pb-100" data-background={CTA}>
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-wrap text-center">
                    <span>Spring summer 22 women’s collection</span>
                    <h2 className="title">-15% Off Discount <br/>All Here</h2>
                    <a href="#" className="rr-primary-btn cta-btn">View Collections</a>
                </div>
            </div>
        </section>
    </>
  )
}
