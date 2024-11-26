import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [InpSearch, setInpSearch] = useState(""); // Search input state
  const [products, setProducts] = useState([]); // All products
  const [categories, setCategories] = useState([]); // Product categories
  const [selectCategories, setSelectCategories] = useState(""); // Selected category

  // Function to render category buttons
  const BtnCategories = () => {
    return (
      <>
        {/* Show All Button */}
        <button
          className={
            "btn " + (selectCategories === "" ? "btn-dark" : "btn-secondary")
          }
          onClick={() => setSelectCategories("")}
        >
          Show All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={
              "btn " +
              (selectCategories === category ? "btn-dark" : "btn-secondary")
            }
            onClick={() => setSelectCategories(category)}
          >
            {category}
          </button>
        ))}
      </>
    );
  };

  // Filter products based on search input and category
  const filteredProducts = () => {
    let filtered = products;

    // Filter by category
    if (selectCategories) {
      filtered = filtered.filter((p) => p.category === selectCategories);
    }

    // Filter by search input
    if (InpSearch) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(InpSearch.toLowerCase()) ||
          p.description.toLowerCase().includes(InpSearch.toLowerCase())
      );
    }

    return filtered;
  };

  // Reset both filters
  const resetFilters = () => {
    setInpSearch("");
    setSelectCategories("");
  };

  useEffect(() => {
    // Fetch products
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    // Fetch categories
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container">
      {/* Search */}
      <h5>Search:</h5>
      <input
        type="text"
        value={InpSearch}
        onChange={(e) => setInpSearch(e.target.value)}
        placeholder="Search by title or description"
      />
      <button onClick={() => setInpSearch("")}>Clear Search</button>
      <button onClick={resetFilters}>Reset Filters</button>

      {/* Categories */}
      <h5>Categories:</h5>
      <div className="row g-3 align-items-center">
        <div className="btn-group">{BtnCategories()}</div>
      </div>

      {/* Products */}
      <h5>Products:</h5>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts().map((p, i) => (
            <Product key={i} produit={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
