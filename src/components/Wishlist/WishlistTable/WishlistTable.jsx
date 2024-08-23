import React from 'react'

const WishlistTable = () => {
  return (
    <>
         <section className="cart-section pt-130 pb-130">
            <div className="container">
                <div className="table-content cart-table table-2">
                    <table className="table mb-0">
                        <thead>
                            <tr>
                                <th className="product-remove"></th>
                                <th className="cart-product-name text-center">Product name</th>
                                <th className="product-price"> Price</th>
                                <th className="product-quantity">Stock Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-remove"><button><i className="fa-sharp fa-regular fa-xmark"></i></button></td>
                                <td className="product-thumbnail">
                                    <a href="shop-details.html">
                                        <img src="assets/img/shop/cart-img-1.png" alt="img"/>
                                    </a>
                                    <div className="product-thumbnail">
                                        <span className="category">Headphone</span>
                                        <h4 className="title">Power Guard Fortress</h4>
                                    </div>
                                </td>
                                <td className="product-price"><span className="amount">$550.00</span></td>
                                <td className="product-quantity">
                                    <span>Out of stock</span>
                                </td>
                                <td className="product-subtotal"><button className="rr-primary-btn">Add to cart</button></td>
                            </tr>
                            <tr>
                                <td className="product-remove"><button><i className="fa-sharp fa-regular fa-xmark"></i></button></td>
                                <td className="product-thumbnail">
                                    <a href="shop-details.html">
                                        <img src="assets/img/shop/cart-img-2.png" alt="img"/>
                                    </a>
                                    <div className="product-thumbnail">
                                        <span className="category">Ups System</span>
                                        <h4 className="title">Quantum Sound Enigma</h4>
                                    </div>
                                </td>
                                <td className="product-price"><span className="amount">$550.00</span></td>
                                <td className="product-quantity">
                                    <span>Out of stock</span>
                                </td>
                                <td className="product-subtotal"><button className="rr-primary-btn">Add to cart</button></td>
                            </tr>
                            <tr>
                                <td className="product-remove"><button><i className="fa-sharp fa-regular fa-xmark"></i></button></td>
                                <td className="product-thumbnail">
                                    <a href="shop-details.html">
                                        <img src="assets/img/shop/cart-img-3.png" alt="img"/>
                                    </a>
                                    <div className="product-thumbnail">
                                        <span className="category">Ups System</span>
                                        <h4 className="title">Quantum Sound Enigma</h4>
                                    </div>
                                </td>
                                <td className="product-price"><span className="amount">$550.00</span></td>
                                <td className="product-quantity">
                                    <span>Out of stock</span>
                                </td>
                                <td className="product-subtotal"><button className="rr-primary-btn">Add to cart</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default WishlistTable