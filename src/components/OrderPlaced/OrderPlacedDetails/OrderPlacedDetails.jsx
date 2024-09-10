import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../../../utlis/helpers';
import { RetereiveOrder } from '../../../slice/orderSlice';
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator"

const OrderPlacedDetails = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
},[])
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(RetereiveOrder(orderId));
    }
  }, [dispatch, orderId]);

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error: {error}</p>;
  // Calculate the subtotal from the line items
  const calculateSubtotal = () => {
    return order.line_items.reduce((sum, item) => sum + parseFloat(item.subtotal), 0);
  };

  return (
    <>
      {order && (
        <section className="order-section pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Thank You! Your order has been received.</h2>

                <div className="order-summary">
                  <h6>Order Number: <span className='oNumber'>{order.id}</span></h6>
                  <h6>Order Status: <span className='oNumber'>{order.status}</span></h6>
                  <h6>Date: <span className='oNumber'>{new Date(order.date_created).toLocaleDateString()}</span></h6>
                  <h6>Email: <span className='oNumber'>{order.billing.email}</span></h6>
                  <h6>Total: <span className='oNumber'>{formatCurrency(order.total)}</span></h6>
                  <h6>Payment method: <span className='oNumber'>{order.payment_method_title}</span></h6>
                </div>

                <div className="table-content cart-table">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="cart-product-name text-center">Products</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.line_items.map((item) => (
                        <tr key={item.id}>
                          <td className="product-thumbnail">
                            <img src={item.image.src} alt={item.name} />
                            <h4 className="title">{item.name}</h4>
                          </td>
                          <td className="product-price">
                            <span className="amount">{formatCurrency(item.price)}</span>
                          </td>
                          <td className="product-quantity">
                            <div className="quantity__group">
                              {item.quantity}
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{formatCurrency(item.subtotal)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="order-totals">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Subtotal:</td>
                        <td>{formatCurrency(calculateSubtotal())}</td>
                      </tr>
                      <tr>
                        <td>Shipping:</td>
                        <td>{formatCurrency(order.shipping_total)} via {order.shipping_lines[0].method_title}</td>
                      </tr>
                      <tr>
                        <td>Payment method:</td>
                        <td>{order.payment_method_title}</td>
                      </tr>
                      <tr className="total">
                        <td>Total:</td>
                        <td>{formatCurrency(order.total)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="addresses">
                  <div className="address">
                    <h3>Billing address</h3>
                    <p>{order.billing.first_name} {order.billing.last_name}<br />
                      {order.billing.company}<br />
                      {order.billing.address_1}<br />
                      {order.billing.address_2}<br />
                      {order.billing.city}, {order.billing.state} {order.billing.postcode}<br />
                      📞 {order.billing.phone}<br />
                      ✉️ {order.billing.email}
                    </p>
                  </div>

                  <div className="address">
                    <h3>Shipping address</h3>
                    <p>{order.shipping.first_name} {order.shipping.last_name}<br />
                      {order.shipping.company}<br />
                      {order.shipping.address_1}<br />
                      {order.shipping.address_2}<br />
                      {order.shipping.city}, {order.shipping.state} {order.shipping.postcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OrderPlacedDetails;
