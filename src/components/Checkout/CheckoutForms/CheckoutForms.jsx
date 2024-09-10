import React, { useState, useReducer, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from "../../../utlis/api";
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../slice/cartSlice';
// Reducer for managing the form and status states
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, formData: { ...state.formData, [action.field]: action.value } };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'SET_STATUS':
      return { ...state, orderStatus: action.status, errorMessage: action.message || '' };
    case 'RESET_FORM':
      return { ...state, formData: action.initialState, errors: {}, orderStatus: '', errorMessage: '' };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

const initialFormState = {
  formData: {
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    country: 'US',
    address1: '',
    address2: '',
    town: '',
    state: 'California',
    postcode: '',
    phone: '',
    orderNotes: '',
    paymentMethod: 'cod',
    termsAccepted: false,
  },
  errors: {},
  orderStatus: '',
  errorMessage: '',
  loading: false,
};

export const CheckoutForms = () => {
  const [state, dispatchForm] = useReducer(formReducer, initialFormState);
  const { formData, errors, orderStatus, errorMessage, loading } = state;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "").replace(",", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const total = useMemo(() => calculateTotal(cartItems), [cartItems]);
  const shippingCost = 50;
  const totalPrice = total + shippingCost;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatchForm({
      type: 'UPDATE_FIELD',
      field: name,
      value: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.address1) formErrors.address1 = 'Street Address is required';
    if (!formData.town) formErrors.town = 'Town/City is required';
    if (!formData.state) formErrors.state = 'State is required';
    if (!formData.postcode) formErrors.postcode = 'Zip Code is required';
    if (!formData.phone) formErrors.phone = 'Phone number is required';
    if (!formData.termsAccepted) formErrors.termsAccepted = 'You must accept the terms and conditions';

    dispatchForm({ type: 'SET_ERRORS', errors: formErrors });
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    dispatchForm({ type: 'SET_LOADING', loading: true });
   
    const orderData = {
      payment_method: formData.paymentMethod,
      payment_method_title: 'Cash On Delivery',
      set_paid: true,
      billing: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company: formData.company,
        address_1: formData.address1,
        address_2: formData.address2,
        city: formData.town,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country,
        email: formData.email,
        phone: formData.phone,
      },
      shipping: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.address1,
        address_2: formData.address2,
        city: formData.town,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country,
      },
      customer_note: formData.orderNotes,
      line_items: cartItems.map(item => ({
        product_id: parseInt(item.id, 10),
        quantity: item.quantity,
      })),
      shipping_lines: [
        {
          method_id: 'flat_rate',
          method_title: 'Flat Rate',
          total: shippingCost.toFixed(2),
        },
      ],
    };

    try {
      const response = await dispatch(createOrder(orderData));
      if (response.payload && response.payload.id) {
        dispatchForm({
          type: 'SET_STATUS',
          status: 'Order created successfully'
        });
        dispatch(clearCart());   
        dispatchForm({
          type: 'RESET_FORM',
          initialState: initialFormState.formData
        });
        // Redirect to the OrderPlaced component with the order ID
       navigate(`/order-placed/${response.payload.id}`);
      } else {
        dispatchForm({
          type: 'SET_STATUS',
          status: '',
          message: 'Sorry, can\'t create an order.'
        });
      }
    } catch (error) {
      dispatchForm({
        type: 'SET_STATUS',
        status: '',
        message: 'Sorry, can\'t create an order.'
      });
    } finally {
      dispatchForm({ type: 'SET_LOADING', loading: false });
    }
  };


  
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
                      <label htmlFor="vehicle3">Remember Me</label>
                    </div>
                    <a href="#" className="forgot">Forgot Password?</a>
                  </div>
                  <button className="rr-primary-btn">Login</button>
                </div>
              </div>
              <div className="verify-item">
                <h4 className="title">Have a coupon?<button type="button" className="rr-checkout-coupon-form-reveal-btn">Click here</button> to enter your code</h4>
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
                <form onSubmit={handleSubmitOrder}>
                  <div className="checkout-form-wrap">
                  <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">Email Address*</h4>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <div className="form-item name">
                      <h4 className="form-title">First Name*</h4>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                       {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-item">
                      <h4 className="form-title">Last Name*</h4>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                       {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">Company Name (Optional)</h4>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">Country / Region*</h4>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="United States (US)"
                      />
                        {errors.country && <p className="error-text">{errors.country}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item ">
                      <h4 className="form-title">Street Address*</h4>
                      <input
                            type="text"
                            id="address1"
                            name="address1"
                            value={formData.address1}
                            onChange={handleInputChange}
                            className="form-control street-control"
                            placeholder="House number and street number"
                          />
                           {errors.address1 && <p className="error-text">{errors.address1}</p>}
                          <input
                            type="text"
                            id="address2"
                            name="address2"
                            value={formData.address2}
                            onChange={handleInputChange}
                            className="form-control street-control-2"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                          />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">Town / City*</h4>
                      <input
                        type="text"
                        id="town"
                        name="town"
                        value={formData.town}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                       {errors.town && <p className="error-text">{errors.town}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">State*</h4>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                       {errors.state && <p className="error-text">{errors.state}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">Zip Code*</h4>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                      {errors.postcode && <p className="error-text">{errors.postcode}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">Phone*</h4>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                       {errors.phone && <p className="error-text">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="form-item">
                      <h4 className="form-title">Order Notes</h4>
                      <textarea
                        id="orderNotes"
                        name="orderNotes"
                        cols="30"
                        rows="5"
                        value={formData.orderNotes}
                        onChange={handleInputChange}
                        className="form-control address"
                      ></textarea>
                    </div>
                  </div>
                </div>
                    {/* Other billing fields here */}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="checkout-right">
                <h3 className="form-header">Your Order</h3>
                <div className="order-box">
                  <div className="order-items">
                    {cartItems.map((item) => (
                      <div className="order-item" key={item.id}>
                        <div className="order-left">
                          <div className="order-img">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <div className="order-right">
                          <div className="content">
                            <span className="category">{item.category}</span>
                            <h4 className="title">{item.name}</h4>
                          </div>
                          <span className="price">{item.price}</span>
                        </div>
                      </div>
                    ))}
                    <div className="order-item item-1">
                      <div className="order-left">
                        <span className="left-title">Subtotal</span>
                      </div>
                      <div className="order-right">
                        <span className="right-title">${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="order-item item-1">
                      <div className="order-left">
                        <span className="left-title">Shipping</span>
                      </div>
                      <div className="order-right">
                        <span className="right-title"><span>Flat rate:</span>${shippingCost.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="order-item item-1">
                      <div className="order-left">
                        <span className="left-title">Total Price:</span>
                      </div>
                      <div className="order-right">
                        <span className="right-title title-2">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="payment-option-wrap">
                    {/* Payment options here */}
                    <div className="payment-option">
                      <div className="shipping-option">
                        <div className="options">
                          <input id="flat_rate" type="radio" name="payment"/>
                          <label htmlFor="flat_rate">Cash On Delivery</label>
                        </div>
                        <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      </div>
                      {/* Other payment options here */}
                    </div>
                    <p className="desc">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span>privacy policy.</span></p>
                    <div className="form-check">
                      <input
                        className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`}
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I have read and agree to the terms and conditions *
                      </label>
                      {errors.termsAccepted && <p className="error-text">{errors.termsAccepted}</p>}
                    </div>
                       <button
                        type="submit"
                        className="rr-primary-btn order-btn"
                        onClick={handleSubmitOrder}
                        disabled={loading}
                      >
                    {loading ? 'Placing Order...' : 'Place Your Order'}
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
