import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../Queries/GetCategoriesQueries";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";

const ShopSidebar = ({ onCategoryChange }) => {
    const { data, loading, error } = useQuery(GET_CATEGORIES);
    const [selectedCategories, setSelectedCategories] = useState([]);

    if (loading) return <div><LoadingIndicator /></div>;
    if (error) return <div>Error loading categories</div>;

    // Filter out "Uncategorized" category
    const categories = data.productCategories.nodes.filter(category => category.name !== "Uncategorized");

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        let updatedCategories;

        if (checked) {
            updatedCategories = [...selectedCategories, value];
        } else {
            updatedCategories = selectedCategories.filter((category) => category !== value);
        }

        setSelectedCategories(updatedCategories);
        onCategoryChange(updatedCategories); // Pass updated categories as an array
    };

    return (
        <div className="col-lg-3 col-md-12">
            <div className="shop-sidebar">
                <h3 className="sidebar-header">Categories</h3>
                <ul className="sidebar-list">
                    {categories.map((category) => (
                        <li key={category.databaseId}>
                            <input
                                type="checkbox"
                                id={`category-${category.databaseId}`}
                                name={category.name}
                                value={category.databaseId}  // use databaseId to pass the correct ID
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor={`category-${category.databaseId}`}>
                                {category.name} ({category.count})
                            </label>
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShopSidebar;
