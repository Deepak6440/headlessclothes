import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWishlistItem, addToCart } from '../../../slice/cartSlice'; // Adjust path accordingly
import { toast } from 'react-toastify';

const WishlistTable = () => {
  const dispatch = useDispatch();

  // Get the wishlist items from the Redux store
  const wishlistItems = useSelector((state) => state.cart.wishlistItems);

  const handleRemoveWishlistItem = (id) => {
    dispatch(removeWishlistItem(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeWishlistItem(product.id))
    toast.success('Product added to cart and removed from wishlist!');
  };

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
                  <th className="product-price">Price</th>
                  <th className="product-subtotal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.length > 0 ? (
                  wishlistItems.map((product) => (
                    <tr key={product.databaseId || product.id}>
                      <td className="product-remove">
                        <button onClick={() => handleRemoveWishlistItem(product.id)}>
                          <i className="fa-sharp fa-regular fa-xmark"></i>
                        </button>
                      </td>
                      <td className="product-thumbnail">
                        <a href="shop-details.html">
                          <img src={product.image} alt={product.name} />
                        </a>
                        <div className="product-thumbnail">
                          <span className="category">{product.name}</span>
                        </div>
                      </td>
                      <td className="product-price">
                        <span className="amount">{product.price}</span>
                      </td>
                      <td className="product-subtotal">
                        <button
                          className="rr-primary-btn"
                          onClick={() => handleAddToCart({
                            id: product.databaseId || product.id,  // Ensure unique identifier
                            name: product.name,
                            price: product.salePrice || product.price,  // Ensure a valid price is passed
                            image: product.image,
                            quantity: 1
                          })}
                        >
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No items in wishlist
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistTable;
