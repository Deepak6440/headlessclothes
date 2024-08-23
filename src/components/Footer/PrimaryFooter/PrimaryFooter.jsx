import React from 'react'

const PrimaryFooter = () => {
  return (
   <>
     <div className="row footer-widget-wrap pb-60">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <h3 className="widget-title">About Store</h3>
                            </div>
                            <div className="footer-contact">
                                <div className="icon"><i className="fa-sharp fa-solid fa-phone-rotary"></i></div>
                                <div className="content">
                                    <span>Have Question? Call Us 24/7</span>
                                    <a href="tel:+25836922569">+258 3692 2569</a>
                                </div>
                            </div>
                            <ul className="schedule-list">
                                <li><span>Monday - Friday:</span>8:00am - 6:00pm</li>
                                <li><span>Saturday:</span>8:00am - 6:00pm</li>
                                <li><span>Sunday</span> Service Close</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <h3 className="widget-title">Our Stores</h3>
                            </div>
                            <ul className="footer-list">
                                <li><a href="contact.html">New York</a></li>
                                <li><a href="contact.html">London SF</a></li>
                                <li><a href="contact.html">Los Angele</a></li>
                                <li><a href="contact.html">Chicago</a></li>
                                <li><a href="contact.html">Las Vegas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <h3 className="widget-title">Shop Categories</h3>
                            </div>
                            <ul className="footer-list">
                                <li><a href="shop-grid.html">New Arrivals</a></li>
                                <li><a href="shop-grid.html">Best Selling</a></li>
                                <li><a href="shop-grid.html">Vegetables</a></li>
                                <li><a href="shop-grid.html">Fresh Meat</a></li>
                                <li><a href="shop-grid.html">Fresh Seafood</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <h3 className="widget-title">Useful Links</h3>
                            </div>
                            <ul className="footer-list">
                                <li><a href="contact.html">Privacy Policy</a></li>
                                <li><a href="contact.html">Terms & Conditions</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="blog-grid.html">Latest News</a></li>
                                <li><a href="contact.html">Our Sitemaps</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <h3 className="widget-title">Our Newsletter</h3>
                            </div>
                            <div className="news-form-wrap">
                                <p className="mb-20">Subscribe to the mailing list to receive updates one the new arrivals and other discounts</p>
                                <div className="footer-form mb-20">
                                    <form action="#" className="rr-subscribe-form">
                                        <input className="form-control" type="email" name="email" placeholder="Email address"/>
                                        <input type="hidden" name="action" value="mailchimpsubscribe"/>
                                        <button className="submit">Subscribe</button>
                                        <div className="clearfix"></div>
                                    </form>
                                </div>
                                <p className="mb-0">I would like to receive news and special offer</p>
                            </div>
                        </div>
                    </div>
                </div>
   </>
  )
}

export default PrimaryFooter