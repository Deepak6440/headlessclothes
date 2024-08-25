import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCT_DETAILS, ADD_TO_CART_MUTATION } from '../../Queries/SingleProductQueries';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import parse from 'html-react-parser';

export const ProductSection = ({ productId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { id: productId },
  });

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const [addToCart, { loading: addToCartLoading, error: addToCartError }] = useMutation(ADD_TO_CART_MUTATION, {
    onCompleted: (data) => {
      console.log('Added to cart:', data);
    },
    onError: (error) => {
      console.error('Error adding to cart:', error);
    },
  });

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity < 1 ? 1 : newQuantity);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart({
        variables: {
          productId: parseInt(productId, 10), 
          quantity: quantity,
        },
      });
    } catch (e) {
      console.error('Error adding to cart:', e);
    }
  };

  const removePTags = (html) => {
    return html.replace(/<p>/g, '').replace(/<\/p>/g, '');
  };

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error: {error.message}</p>;

  const product = data?.product || {};
  const mainImage = selectedImage || product.featuredImage?.node?.sourceUrl;
  const cleanedDescription = removePTags(product.shortDescription || '');

  return (
    <section className="shop-section single pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="gallery-images" style={{ width: '25%', marginRight: '15px' }}>
              <div className="gallery-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {product.galleryImages?.nodes?.map((image, index) => (
                  <img
                    src={image.sourceUrl}
                    alt={`shop-gallery-${index}`}
                    key={index}
                    style={{ cursor: 'pointer', width: '100%', height: 'auto', borderRadius: '5px', objectFit: 'cover' }}
                    onClick={() => setSelectedImage(image.sourceUrl)}
                  />
                ))}
              </div>
            </div>
            <div className="main-image" style={{ width: '75%' }}>
              <img src={mainImage} alt="main product" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details">
              <div className="product-info">
                <div className="product-inner">
                  <h3 className="title">{product.name}</h3>
                  <div className="rating-wrap">
                    <ul className="rating">
                      {Array(product.rating || 0).fill().map((_, i) => (
                        <li key={i}><i className="fa-sharp fa-solid fa-star"></i></li>
                      ))}
                    </ul>
                    <span>({product.reviewsCount || 0} customer reviews)</span>
                  </div>
                  <span className="category">SKU: {product.sku}</span>
                  <h4 className="price">
                    {product.salePrice ? (
                      <>
                        <span className="offer">{product.regularPrice}</span>{product.salePrice}
                      </>
                    ) : (
                      `${product.price?.startsWith('$') ? product.price : `$${product.price}`}`
                    )}
                  </h4>
                  <div className="product-desc-wrap">
                    <p className="desc">{cleanedDescription}</p>
                    <span className="view-text"><i className="fa-sharp fa-regular fa-eye"></i>{product.viewCount || 0} people are viewing this right now</span>
                  </div>
                  <div className="item-left-line">
                    <span>Only {product.stockQuantity || 0} items left in stock!</span>
                    <div className="line"></div>
                  </div>
                  <ul className="details-list">
                    <li><i className="fa-light fa-arrow-right-arrow-left"></i>Free returns</li>
                    <li><i className="fa-light fa-truck"></i>Free shipping via DHL, fully insured</li>
                    <li><i className="fa-light fa-circle-check"></i>All taxes and customs duties included</li>
                  </ul>
                </div>
                <div className="product-btn">
                  <form>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                    />
                  </form>
                  <div className="cart-btn-wrap-2">
                    <button
                      className="rr-primary-btn cart-btn"
                      onClick={handleAddToCart}
                      disabled={addToCartLoading}
                    >
                      {addToCartLoading ? 'Adding...' : 'Add To Cart'}
                    </button>
                  </div>
                  {addToCartError && <p style={{ color: 'red' }}>Error: {addToCartError.message}</p>}
                </div>
                <a href="#" className="shop-details-btn rr-primary-btn">Buy The Item Now</a>
                <ul className="product-meta">
                  <li><a href="#">Compare</a></li>
                  <li><a href="#">Ask a question</a></li>
                  <li><a href="#">Share</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
