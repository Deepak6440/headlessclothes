import React, { useState } from 'react';
import ShopHeader from './ShopHeader/ShopHeader';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopSidebar from './ShopSidebar/ShopSidebar';

const Shop = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategorySelection = (categoryIds) => {
        setSelectedCategories(categoryIds); // Pass the array of category IDs
    };

    return (
        <>
            <ShopHeader />
            <section className="shop-grid pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <ShopProducts selectedCategories={selectedCategories} />
                        <ShopSidebar onCategoryChange={handleCategorySelection} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shop;
