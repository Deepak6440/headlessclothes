import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateQuantity, deleteCart } from "../../../slice/cartSlice";

const CartTable = () => {
  const cart = useSelector((state) => state.cart.cartItems); // Ensure this is an array
  const dispatch = useDispatch();

  const handleQuantityChange = (e, id) => {
    const newQuantity = Number(e.target.value);
    dispatch(updateQuantity({ id, quantity: newQuantity < 1 ? 1 : newQuantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteCart(id));
  };

  const parsePrice = (priceString) => {
    // Remove any non-numeric characters except the decimal point
    const priceNumber = parseFloat(priceString.replace(/[^0-9.]/g, ''));
    return isNaN(priceNumber) ? 0 : priceNumber;
  };

  const calculateSubtotal = (item) => {
    const price = parsePrice(item.price);
    return (item.quantity * price).toFixed(2);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parsePrice(item.price);
      return total + item.quantity * price;
    }, 0).toFixed(2);
  };

  if (!Array.isArray(cart)) {
    return (
      <section className="cart-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Error: Cart data is not available</h3>
              <p>Please check your cart data or try again later.</p>
              <Link to="/shop" className="rr-primary-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="cart-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Your cart is currently empty</h3>
              <p>Browse our products and add items to your cart.</p>
              <Link to="/shop" className="rr-primary-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
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
                    <th className="cart-product-name text-center">Products</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.databaseId ||item.id}>
                      <td className="product-remove">
                        <button onClick={() => handleRemoveItem(item.id)}>
                          <i className="fa-sharp fa-regular fa-xmark"></i>
                        </button>
                      </td>
                      <td className="product-thumbnail">
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item.image || 'path/to/placeholder/image.png'}
                            alt={item.name || 'Product Image'}
                            style={{ width: '100px', height: 'auto' }}
                          />
                        </Link>
                        <div className="product-thumbnail">
                          <h4 className="title">{item.name || 'Product Name'}</h4>
                        </div>
                      </td>
                      <td className="product-price">
                        <span className="amount">${parsePrice(item.price).toFixed(2)}</span>
                      </td>
                      <td className="product-quantity">
                        <div className="quantity__group">
                          <input
                            type="number"
                            className="input-text qty text"
                            name="quantity"
                            value={item.quantity}
                            min="1"
                            max="100"
                            step="1"
                            autoComplete="off"
                            onChange={(e) => handleQuantityChange(e, item.id)}
                          />
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="amount">${calculateSubtotal(item)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-btn-wrap">
              <div className="left-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code"
                />
                <button className="rr-primary-btn">Apply Coupon</button>
              </div>
              <button className="rr-primary-btn update-btn">Update Cart</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="checkout-wrapper">
              <div className="checkout-top checkout-item item-1">
                <h4 className="title">Cart Totals</h4>
              </div>
              <div className="checkout-top checkout-item">
                <h4 className="title">Subtotal</h4>
                <span className="price">${calculateTotal()}</span>
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
                      <input id="free_shipping" type="radio" name="shipping" />
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
                <span>${calculateTotal()}</span>
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
  );
};

export default CartTable;
