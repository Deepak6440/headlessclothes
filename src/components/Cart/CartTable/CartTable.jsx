import React, { useState } from "react";
import CartItem from "../../../assets/img/cart-img-1.png";
import { Link } from "react-router-dom";
const CartTable = () => {
    const [quantities, setQuantities] = useState({ item1: 1, item2: 1 });

    const handleQuantityChange = (e, item) => {
        setQuantities({
            ...quantities,
            [item]: e.target.value,
        });
    };
    return (
        <>
            <section className="cart-section pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-top-content">
                                <p>
                                    Add <span>$59.69</span> to cart and get free shipping
                                </p>
                                <div className="line"></div>
                            </div>
                            <div className="table-content cart-table">
                                <table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th className="product-remove"></th>
                                            <th className="cart-product-name text-center">
                                                Products
                                            </th>
                                            <th className="product-price"> Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-remove">
                                                <button>
                                                    <i className="fa-sharp fa-regular fa-xmark"></i>
                                                </button>
                                            </td>
                                            <td className="product-thumbnail">
                                                <Link to="/shop">
                                                    <img src={CartItem} alt="img" />
                                                </Link>
                                                <div className="product-thumbnail">
                                                    <h4 className="title">Power Guard htmlFortress</h4>
                                                </div>
                                            </td>
                                            <td className="product-price">
                                                <span className="amount">$550.00</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="quantity__group">
                                                    <input
                                                        type="number"
                                                        className="input-text qty text"
                                                        name="quantity"
                                                        value={quantities.item1}
                                                        min="1"
                                                        max="100"
                                                        step="1"
                                                        autoComplete="off"
                                                        onChange={(e) => handleQuantityChange(e, "item1")}
                                                    />
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="amount">$230.50</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-remove">
                                                <button>
                                                    <i className="fa-sharp fa-regular fa-xmark"></i>
                                                </button>
                                            </td>
                                            <td className="product-thumbnail">
                                                <Link to="/shop">
                                                    <img src={CartItem} alt="img" />
                                                </Link>
                                                <div className="product-thumbnail">
                                                    <h4 className="title">Quantum Sound Enigma</h4>
                                                </div>
                                            </td>
                                            <td className="product-price">
                                                <span className="amount">$550.00</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="quantity__group">
                                                    <input
                                                        type="number"
                                                        className="input-text qty text"
                                                        name="quantity"
                                                        value={quantities.item1}
                                                        min="1"
                                                        max="100"
                                                        step="1"
                                                        autoComplete="off"
                                                        onChange={(e) => handleQuantityChange(e, "item1")}
                                                    />
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="amount">$230.50</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-btn-wrap">
                                <div className="left-item">
                                    <input
                                        type="text"
                                        className="htmlForm-control"
                                        placeholder="Coupon Code"
                                    />
                                    <button className="rr-primary-btn">Apply Coupon</button>
                                </div>
                                <button className="rr-primary-btn update-btn">
                                    Update Cart
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout-wrapper">
                                <div className="checkout-top checkout-item item-1">
                                    <h4 className="title">Cart Totals</h4>
                                </div>
                                <div className="checkout-top checkout-item">
                                    <h4 className="title">Subtotal</h4>
                                    <span className="price">$1100.00</span>
                                </div>
                                <div className="checkout-shipping checkout-item">
                                    <h4 className="title">Shipping</h4>
                                    <div className="shipping-right">
                                        <div className="checkout-option-wrapper">
                                            <div className="shipping-option">
                                                <input id="flat_rate" type="radio" name="shipping" />
                                                <label htmlFor="flat_rate">Free Shipping</label>
                                            </div>
                                            <div className="shipping-option">
                                                <input id="local_pickup" type="radio" name="shipping" />
                                                <label htmlFor="local_pickup">Flat Rate</label>
                                            </div>
                                            <div className="shipping-option">
                                                <input
                                                    id="free_shipping"
                                                    type="radio"
                                                    name="shipping"
                                                />
                                                <label htmlFor="free_shipping">Local Pickup</label>
                                            </div>
                                        </div>
                                        <p>
                                            Shipping options will be updated <br /> during checkout
                                        </p>
                                        <span>Calculate Shipping</span>
                                    </div>
                                </div>
                                <div className="checkout-total checkout-item">
                                    <h4 className="title">Total</h4>
                                    <span>$724</span>
                                </div>
                            </div>
                            <div className="checkout-proceed">
                                <Link to="/checkout" className="rr-primary-btn checkout-btn">
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartTable;
