import React from 'react'

export const CheckoutForms = () => {
  return (
  <>
    <section className="checkout-section pt-100 pb-100">
            <div className="container">
                <div className="checkout-top">
                    <div className="coupon-list">
                        <div className="verify-item mb-30">
                            <h4 className="title">Returning customers?<button type="button" className="rr-checkout-login-form-reveal-btn">Click here</button> to login</h4>
                            <div id="rrReturnCustomerLoginForm" className="login-form">
                                <form action="mail.php">
                                    <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Your Name"/>
                                    <input type="text" id="password" name="password" className="form-control" placeholder="Password"/>
                                </form>
                                <div className="checkbox-wrap">
                                    <div className="checkbox-item">
                                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                        <label for="vehicle3">Remember Me</label>
                                    </div>
                                    <a href="#" className="forgot">Forgot Password?</a>
                                </div>
                                <button className="rr-primary-btn">Login</button>
                            </div>
                        </div>
                        <div className="verify-item">
                            <h4 className="title">Returning customers?<button type="button" className="rr-checkout-coupon-form-reveal-btn">Click here</button> to login</h4>
                            <div id="rrCheckoutCouponForm" className="login-form">
                                <form action="mail.php">
                                    <input type="text" id="code" name="code" className="form-control" placeholder="Coupon Code"/>
                                </form>
                                <button className="rr-primary-btn">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="checkout-left">
                            <h3 className="form-header">Billing Details</h3>
                            <form action="mail.php">
                                <div className="checkout-form-wrap">
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">Email Address*</h4>
                                                <input type="email" id="email" name="email" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <div className="form-item name">
                                                <h4 className="form-title">First Name*</h4>
                                                <input type="text" id="fullname-2" name="fullname-2" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-item">
                                                <h4 className="form-title">Last Name*</h4>
                                                <input type="text" id="lastname" name="lastname" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">Company Name (Optional)*</h4>
                                                <input type="text" id="company" name="company" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">Country / Region*</h4>
                                                <input type="text" id="country" name="country" className="form-control" placeholder="United States (US)"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item ">
                                                <h4 className="form-title">Street Address*</h4>
                                                <input type="text" id="street" name="street" className="form-control street-control" placeholder="House number and street number"/>
                                                <input type="text" id="street-2" name="street-2" className="form-control street-control-2" placeholder="Apartment, suite, unit, etc. (optional)"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">Town / City*</h4>
                                                <input type="text" id="town" name="town" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">State*</h4>
                                                <div className="nice-select select-control form-control country open" tabindex="0"><span className="current">California</span><ul className="list"><li data-value="" className="option selected focus">California</li><li data-value="vdt" className="option">New Work</li><li data-value="can" className="option">Paris</li><li data-value="uk" className="option">Dhaka</li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">Zip Code*</h4>
                                                <input type="text" id="zip" name="zip" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">Phone*</h4>
                                                <input type="text" id="phone" name="phone" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="form-item">
                                                <h4 className="form-title">Order Notes*</h4>
                                                <textarea id="message" name="message" cols="30" rows="5" className="form-control address"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="checkout-right">
                            <h3 className="form-header">Your Order</h3>
                            <div className="order-box">
                                <div className="order-items">
                                    <div className="order-item item-1">
                                        <div className="order-left">
                                            <span className="product">Product</span>
                                        </div>
                                        <div className="order-right">
                                            <span className="price">Price</span>
                                        </div>
                                    </div>
                                    <div className="order-item">
                                        <div className="order-left">
                                            <div className="order-img"><img src="assets/img/shop/cart-img-1.png" alt="img"/></div>
                                        </div>
                                        <div className="order-right">
                                            <div className="content">
                                                <span className="category">Headphone</span>
                                                <h4 className="title">Surge Shield Safeguard</h4>
                                            </div>
                                            <span className="price">$500.00</span>
                                        </div>
                                    </div>
                                    <div className="order-item">
                                        <div className="order-left">
                                            <div className="order-img"><img src="assets/img/shop/cart-img-2.png" alt="img"/></div>
                                        </div>
                                        <div className="order-right">
                                            <div className="content">
                                                <span className="category">Ups System</span>
                                                <h4 className="title">Nova Sound Elegance</h4>
                                            </div>
                                            <span className="price">$500.00</span>
                                        </div>
                                    </div>
                                    <div className="order-item">
                                        <div className="order-left">
                                            <div className="order-img"><img src="assets/img/shop/cart-img-3.png" alt="img"/></div>
                                        </div>
                                        <div className="order-right">
                                            <div className="content">
                                                <span className="category">Headset Mic</span>
                                                <h4 className="title">Pure Pod Harmony</h4>
                                            </div>
                                            <span className="price">$500.00</span>
                                        </div>
                                    </div>
                                    <div className="order-item item-1">
                                        <div className="order-left">
                                            <span className="left-title">Subtotal</span>
                                        </div>
                                        <div className="order-right">
                                            <span className="right-title">$500.00</span>
                                        </div>
                                    </div>
                                    <div className="order-item item-1">
                                        <div className="order-left">
                                            <span className="left-title">Subtotal</span>
                                        </div>
                                        <div className="order-right">
                                            <span className="right-title">$500.00</span>
                                        </div>
                                    </div>
                                    <div className="order-item item-1">
                                        <div className="order-left">
                                            <span className="left-title">Shipping</span>
                                        </div>
                                        <div className="order-right">
                                            <span className="right-title"><span>Flat rate:</span>$50.00</span>
                                        </div>
                                    </div>
                                    <div className="order-item item-1">
                                        <div className="order-left">
                                            <span className="left-title">Total Price:</span>
                                        </div>
                                        <div className="order-right">
                                            <span className="right-title title-2">$550.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-option-wrap">
                                    <div className="payment-option">
                                        <div className="shipping-option">
                                            <div className="options">
                                                <input id="flat_rate" type="radio" name="shipping"/>
                                                <label for="flat_rate">Direct Bank Transfer</label>
                                            </div>
                                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                        </div>
                                        <div className="shipping-option">
                                            <input id="local_pickup" type="radio" name="shipping"/>
                                            <label for="local_pickup">Check Payments</label>
                                        </div>
                                        <div className="shipping-option">
                                            <input id="free_shipping" type="radio" name="shipping"/>
                                            <label for="free_shipping">Cash On Delivery</label>
                                        </div>
                                        <div className="shipping-option">
                                            <input id="paypal" type="radio" name="shipping"/>
                                            <label for="paypal">Paypal</label>
                                        </div>
                                    </div>
                                    <p className="desc">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span>privacy policy.</span></p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            I have read and agree terms and conditions *
                                        </label>
                                    </div>
                                    <button className="rr-primary-btn order-btn">Place Your Order</button>
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
