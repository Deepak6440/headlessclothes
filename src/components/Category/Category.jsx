import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";
import Swiper from 'swiper';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { GET_PRODUCT_CATEGORIES } from '../Queries/HomeProductCatQueries';

const Category = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT_CATEGORIES);

  useEffect(() => {
    if (!loading && !error) {
      const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      });
      return () => {
        if (swiper && swiper.destroy) {
          swiper.destroy();
        }
      };
    }
  }, [loading, error]);

  if (loading) return <LoadingIndicator />;
  if (error) return <p style={{ textAlign: 'center' }}>Error: {error.message}</p>;

  // Filter out the "Uncategorized" category
  const categories = data.productCategories.nodes.filter(
    (category) => category.slug !== "uncategorized"
  );

  return (
    <>
      <section className="category-section pt-100 pb-100">
        <div className="container">
          <div className="category-top heading-space space-border">
            <div className="section-heading mb-0">
              <h2 className="section-title">Best for your categories</h2>
              <p>{categories.length} categories available</p> {/* Update to use filtered categories */}
            </div>
            <div className="swiper-arrow">
              <div className="swiper-nav swiper-next"><i className="fa-regular fa-arrow-left"></i></div>
              <div className="swiper-nav swiper-prev"><i className="fa-regular fa-arrow-right"></i></div>
            </div>
          </div>
          <div className="category-carousel swiper">
            <div className="swiper-wrapper">
              {categories.map((category) => (  
                <div key={category.id} className="swiper-slide">
                  <div className="category-item">
                    <div className="category-img">
                      <Link to={`/category/${category.slug}`}>
                        <img src={category.image.guid} alt={category.name} />
                      </Link>
                    </div>
                    <h3 className="title">{category.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
