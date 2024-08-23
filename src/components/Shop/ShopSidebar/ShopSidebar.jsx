import React from 'react'

const ShopSidebar = () => {
  return (
    <>
         <div className="col-lg-3 col-md-12">
                        <div className="shop-sidebar">
                            <h3 className="sidebar-header">Categories</h3>
                            <ul className="sidebar-list">
                                <li>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label for="vehicle1"> Accessories (4)</label><br/>
                                </li>
                                <li>
                                    <input type="checkbox" id="vehicle3" name="vehicle1" value="Bike"/>
                                    <label for="vehicle3"> Badge Categories (4)</label><br/>
                                </li>
                                <li>
                                    <input type="checkbox" id="vehicle4" name="vehicle1" value="Bike"/>
                                    <label for="vehicle4"> Bag & Backpacks (1)</label><br/>
                                </li>
                                <li>
                                    <input type="checkbox" id="vehicle5" name="vehicle1" value="Bike"/>
                                    <label for="vehicle5"> Category Grid (12)</label><br/>
                                </li>
                                <li>
                                    <input type="checkbox" id="vehicle6" name="vehicle1" value="Bike"/>
                                    <label for="vehicle6"> Clothing & Apparel (2)</label><br/>
                                </li>
                                <li>
                                    <input type="checkbox" id="vehicle7" name="vehicle1" value="Bike"/>
                                    <label for="vehicle7"> Consumer Electric (3)</label><br/>
                                </li>
                                <li>
                                    <input type="checkbox" id="vehicle8" name="vehicle1" value="Bike"/>
                                    <label for="vehicle8"> Top Electronics (3)</label><br/>
                                </li>
                                <li>
                                    <input type="checkbox" id="vehicle9" name="vehicle1" value="Bike"/>
                                    <label for="vehicle9"> Women's Collection (5)</label><br/>
                                </li>
                            </ul>
                        </div>
                        <div className="shop-sidebar">
                            <h3 className="sidebar-header">Filter by price</h3>
                            <div className="filter-box">
                                <div className="range-slider">
                                    <input type="range" min="20" max="500" value="300" id="price-range"/>
                                    <div className="slider-line"></div>
                                    <div className="range-slider-output">
                                        <h3 className="price">Price: $10 — $90</h3>
                                        <h3 id="price-output" className="price">$<span>500</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop-sidebar">
                            <h3 className="sidebar-header">Item Size</h3>
                            <div className="radion-btn-area">
                                <div className="radio-item">
                                    <label for="radio-1">
                                        <input type="radio" id="radio-1" name="flavor" value="vanilla"/>
                                        <span className="size">XL</span>
                                    </label>
                                    <span className="number">(15)</span>
                                </div>
                                <div className="radio-item">
                                    <label for="radio-2">
                                        <input type="radio" id="radio-2" name="flavor" value="vanilla"/>
                                        <span className="size">S</span>
                                    </label>
                                    <span className="number">(15)</span>
                                </div>
                                <div className="radio-item">
                                    <label for="radio-3">
                                        <input type="radio" id="radio-3" name="flavor" value="vanilla"/>
                                        <span className="size">Small</span>
                                    </label>
                                    <span className="number">(15)</span>
                                </div>
                                <div className="radio-item">
                                    <label for="radio-4">
                                        <input type="radio" id="radio-4" name="flavor" value="vanilla"/>
                                        <span className="size">L</span>
                                    </label>
                                    <span className="number">(15)</span>
                                </div>
                                <div className="radio-item">
                                    <label for="radio-5">
                                        <input type="radio" id="radio-5" name="flavor" value="vanilla"/>
                                        <span className="size">XL</span>
                                    </label>
                                    <span className="number">(15)</span>
                                </div>
                                <div className="radio-item">
                                    <label for="radio-6">
                                        <input type="radio" id="radio-6" name="flavor" value="vanilla"/>
                                        <span className="size">Extra Large</span>
                                    </label>
                                    <span className="number">(15)</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop-sidebar">
                            <h3 className="sidebar-header">Brands</h3>
                            <ul className="sidebar-list list-2">
                                <li>
                                    <div className="left-item">
                                        <input type="checkbox" id="vehicle-a" name="vehicle1" value="Bike"/>
                                        <label for="vehicle-a"> Juliate</label><br/>
                                    </div>
                                    <span className="number">(15)</span>
                                </li>
                                <li>
                                    <div className="left-item">
                                        <input type="checkbox" id="vehicle-e" name="vehicle1" value="Bike"/>
                                        <label for="vehicle-e"> H&M</label><br/>
                                    </div>
                                    <span className="number">(15)</span>
                                </li>
                                <li>
                                    <div className="left-item">
                                        <input type="checkbox" id="vehicle-b" name="vehicle1" value="Bike"/>
                                        <label for="vehicle-b"> Harmoni</label><br/>
                                    </div>
                                    <span className="number">(15)</span>
                                </li>
                                <li>
                                    <div className="left-item">
                                        <input type="checkbox" id="vehicle-c" name="vehicle1" value="Bike"/>
                                        <label for="vehicle-c"> Sowat</label><br/>
                                    </div>
                                    <span className="number">(15)</span>
                                </li>
                                <li>
                                    <div className="left-item">
                                        <input type="checkbox" id="vehicle-f" name="vehicle1" value="Bike"/>
                                        <label for="vehicle-f"> MAcro</label><br/>
                                    </div>
                                    <span className="number">(15)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="shop-sidebar sticky-widget">
                            <h3 className="sidebar-header">Brands</h3>
                            <div className="sidebar-items">
                                <div className="sidebar-item">
                                    <div className="item-img">
                                        <img src="assets/img/shop/sidebar-img-1.png" alt="img"/>
                                    </div>
                                    <div className="content">
                                        <ul className="review">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                        <h4 className="title">Fancy Black Sunglass</h4>
                                        <span className="price"> <span className="offer">$450.00</span>$257.00</span>
                                    </div>
                                </div>
                                <div className="sidebar-item">
                                    <div className="item-img">
                                        <img src="assets/img/shop/sidebar-img-2.png" alt="img"/>
                                    </div>
                                    <div className="content">
                                        <ul className="review">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                        <h4 className="title">D’valo Office Cotton</h4>
                                        <span className="price"> <span className="offer">$450.00</span>$257.00</span>
                                    </div>
                                </div>
                                <div className="sidebar-item">
                                    <div className="item-img">
                                        <img src="assets/img/shop/sidebar-img-3.png" alt="img"/>
                                    </div>
                                    <div className="content">
                                        <ul className="review">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                        <h4 className="title">Black Flower Sandal</h4>
                                        <span className="price"> <span className="offer">$450.00</span>$257.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default ShopSidebar