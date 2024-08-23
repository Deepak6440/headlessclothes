import React from 'react'
import blog1 from "../../assets/img/Home/asset 35.jpeg"
import blog2 from "../../assets/img/Home/asset 36.jpeg"
import blog3 from "../../assets/img/Home/asset 37.jpeg"
const Blog = () => {
  return (
    <>
         <section className="blog-section pb-100">
            <div className="container">
                <div className="section-heading text-center">
                    <h2 className="section-title mb-0">Our Latest News Insight</h2>
                </div>
                <div className="row gy-lg-0 gy-4 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="post-card">
                            <div className="post-thumb">
                                <img src={blog1} alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-solid fa-calendar-days"></i>3 Comment</li>
                                        <li><i className="fa-regular fa-tag"></i>oil Change</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">Fashion Around the: Exploring Cultural Influences</a></h3>
                                </div>
                                <div className="post-bottom">
                                    <a href="blog-details.html" className="read-more">Read More<i className="fa-regular fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="post-card">
                            <div className="post-thumb">
                                <img src={blog2} alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-solid fa-calendar-days"></i>3 Comment</li>
                                        <li><i className="fa-regular fa-tag"></i>oil Change</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">Embracing Ethical and Eco friendly Fashion</a></h3>
                                </div>
                                <div className="post-bottom">
                                    <a href="blog-details.html" className="read-more">Read More<i className="fa-regular fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="post-card">
                            <div className="post-thumb">
                                <img src={blog3} alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-solid fa-calendar-days"></i>3 Comment</li>
                                        <li><i className="fa-regular fa-tag"></i>oil Change</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">How to Decorate Your Car for Halloween</a></h3>
                                </div>
                                <div className="post-bottom">
                                    <a href="blog-details.html" className="read-more">Read More<i className="fa-regular fa-arrow-right"></i></a>
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

export default Blog