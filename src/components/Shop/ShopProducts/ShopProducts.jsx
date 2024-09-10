import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS,GET_ALL_PRODUCTS  } from '../../Queries/ShopPageQueries';
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../../../slice/cartSlice';
import { toast } from 'react-toastify';
const ShopProducts = ({ selectedCategories }) => {
  const termTaxonomId = selectedCategories && selectedCategories.length > 0 
  ? selectedCategories.map(id => id.toString()) 
  : null;  // Null if no categories are selected

const queryToUse = termTaxonomId ? GET_PRODUCTS : GET_ALL_PRODUCTS;
const dispatch = useDispatch();
const { loading, error, data } = useQuery(queryToUse, {
  variables: termTaxonomId ? { termTaxonomId, first: 50  } : {},
});

if (loading) return <div><LoadingIndicator /></div>;
if (error) return <div>Error: {error.message}</div>;

//console.log('Query Data:', data);

let products = [];

if (termTaxonomId) {
  // When categories are selected, extract products from the data
  if (data && data.productCategories && data.productCategories.nodes.length) {
      products = data.productCategories.nodes[0]?.products.edges || [];
  }
} else {
  // When no categories are selected, extract all products
  if (data && data.products && data.products.edges.length) {
      products = data.products.edges;
  }
}

const handleAddToCart = (products) =>{
    dispatch(addToCart(products))
    toast.success('Product added to cart!');
  }

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product))
    toast.success('Product added to Wishlist!');
  }

    return (
        <div className="col-lg-9 col-md-12">
            <div className="shop-grid-left">
                <div className="top-grid-content">
                    {/* ... */}
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row gy-4">
                            {products.map(({ node }) => (
                                <div key={node.databaseId} className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-item">
                                        <div className="shop-thumb">
                                            <div className="overlay"></div>
                                            <Link to={`/product/${node.databaseId}`}>
                                                <img src={node.featuredImage?.node.sourceUrl} alt={node.featuredImage?.node.altText || node.name} />
                                            </Link>
                                            {node.salePrice && <span className="sale">Sale</span>}
                                            <ul className="shop-list">
                                            <li>
                                            <button 
                                                onClick={() => handleAddToCart({
                                                id: node.databaseId,
                                                name: node.name,
                                                price: node.salePrice || node.price,  // Ensure a valid price is passed
                                                image: node.featuredImage?.node.sourceUrl,
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
                                                id: node.databaseId,
                                                name: node.name,
                                                price: node.salePrice || node.price,  // Ensure a valid price is passed
                                                image: node.featuredImage?.node.sourceUrl,
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
                                            <span className="category">{node.name}</span>
                                            <h3 className="title"><a href="shop-details.html">{node.name}</a></h3>
                                            <div className="review-wrap">
                                                <ul className="review">
                                                    {[...Array(node.reviewCount)].map((_, i) => (
                                                        <li key={i}><i className="fa-solid fa-star"></i></li>
                                                    ))}
                                                </ul>
                                                <span>({node.reviewCount} Reviews)</span>
                                            </div>
                                            <span className="price">
                                                {node.salePrice ? <><span className="offer">{node.regularPrice}</span>{node.salePrice}</> : `${node.regularPrice}`}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopProducts;
