import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../../Queries/GetProductBasedOnCatQueries";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slice/cartSlice";
const ProductCatList = ({ categoryNames }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { categoryNames },
  });

  const dispatch = useDispatch();

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.productCategories.nodes[0]?.products.edges.map(
    (edge) => edge.node
  );

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
    toast.success('Product added to cart!');
  }

  return (
    <section className="shop-grid-2 pt-100 pb-100">
      <div className="container">
        <div className="row gy-4">
          {products.map((product) => (
            <div
              key={product.databaseId}
              className="col-xl-3 col-lg-4 col-md-6"
            >
              <div className="shop-item">
                <div className="shop-thumb">
                  <div className="overlay"></div>
                  <Link to={`/product/${product.databaseId}`}>
                    <img
                      src={
                        product.featuredImage?.node.sourceUrl ||
                        "assets/img/shop/shop-1.png"
                      }
                      alt={product.featuredImage?.node.altText || "shop"}
                    />
                  </Link>
                  {product.salePrice && <span className="sale">Sale</span>}
                  <ul className="shop-list">
                    <li>
                      <button
                        onClick={() =>
                          handleAddToCart({
                            id: product.databaseId,
                            name: product.name,
                            price: product.salePrice || product.price, // Ensure a valid price is passed
                            image: product.featuredImage?.node.sourceUrl,
                            quantity: 1,
                          })
                        }
                        className="add-to-cart-btn"
                      >
                        <i className="fa-regular fa-cart-shopping"></i>
                      </button>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-light fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="shop-content">
                  <span className="category">{product.name}</span>
                  <h3 className="title">
                    <a href="shop-details.html">{product.name}</a>
                  </h3>
                  <div className="review-wrap">
                    <ul className="review">
                      {[...Array(5)].map((star, index) => (
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
                        <span className="offer">{product.regularPrice}</span>
                        {product.salePrice}
                      </>
                    ) : (
                      `${product.price}`
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatList;
