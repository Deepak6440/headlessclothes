import React, { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { GET_FEATURED_PRODUCTS } from '../Queries/FeaturedProductQueries'; 
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../../slice/cartSlice';
import { toast } from 'react-toastify';
const Featured = () => {
  const { loading, error, data } = useQuery(GET_FEATURED_PRODUCTS);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        // Your Swiper options here
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
        // Additional Swiper configurations
      });
    }
  }, [data]); 

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
    toast.success('Product added to cart!');
  }

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product))
    toast.success('Product added to Wishlist!');
  }

  if (loading) return <LoadingIndicator />
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="fashion-section pb-100">
      <div className="container">
        <div className="category-top heading-space space-border">
          <div className="section-heading mb-0">
            <h2 className="section-title">GET YOUR FASHION STYLE</h2>
            <p>Featured Products</p>
          </div>
          <div className="swiper-arrow">
            <div className="swiper-nav swiper-next">
              <i className="fa-regular fa-arrow-left"></i>
            </div>
            <div className="swiper-nav swiper-prev">
              <i className="fa-regular fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="shop-carousel swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {data.products.edges.map(({ node: product }) => (
              <div className="swiper-slide" key={product.databaseId}>
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay"></div>
                    <Link to={`/product/${product.databaseId}`}>
                      <img src={product.featuredImage?.node.sourceUrl} alt={product.name} />
                    </Link>
                    <span className="sale">New</span>
                    <ul className="shop-list">
                    <li>
                      <button 
                        onClick={() => handleAddToCart({
                          id: product.databaseId,
                          name: product.name,
                          price: product.salePrice || product.price,  // Ensure a valid price is passed
                          image: product.featuredImage?.node.sourceUrl,
                          quantity:1
                        })}
                        className="add-to-cart-btn"
                      >
                        <i className="fa-regular fa-cart-shopping"></i>
                      </button>
                    </li>

                      <li>
                       
                        <button 
                        onClick={() => handleAddToWishlist({
                          id: product.databaseId,
                          name: product.name,
                          price: product.salePrice || product.price,  // Ensure a valid price is passed
                          image: product.featuredImage?.node.sourceUrl,
                          quantity:1
                        })}
                        className="add-to-cart-btn"
                      >
                         <i className="fa-light fa-heart"></i>
                      </button>
                      
                      </li>
                    
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title">{product.name}</h3>
                    <div className="review-wrap">
                      <ul className="review">
                        {Array.from({ length: Math.round(product.reviewCount / 5) }).map((_, index) => (
                          <li key={index}>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <span>({product.reviewCount} Reviews)</span>
                    </div>
                    <span className="price">
                        {product.salePrice ? (
                            <>
                            <span className="offer">{product.regularPrice}</span>{product.salePrice}
                            </>
                        ) : (
                            `${product.price.startsWith('$') ? product.price : `$${product.price}`}`
                        )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
