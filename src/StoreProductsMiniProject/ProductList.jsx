import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [InpSearch, setInpSearch] = useState(""); 
  const [btnSearch, setbtnSearch] = useState(""); 
  const [products, setProducts] = useState([]); 
  const [categories, setCategories] = useState([]);
  const [selectCategories, setSelectCategories] = useState(""); 

  const BtnCategories = () => {
    return (
      <>
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

  const filteredProducts = () => {
    let filtered = products;
    if (selectCategories) {
      filtered = filtered.filter((p) => p.category === selectCategories);
    }
    if (btnSearch) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(btnSearch.toLowerCase()) ||
          p.description.toLowerCase().includes(btnSearch.toLowerCase())
      );
    }

    return filtered;
  };

  const resetFilters = () => {
    setInpSearch("");
    setbtnSearch("");
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container">
    
      
      <h5>Search:</h5>
      <div className="input-group mb-3">
      <input
        type="text"
        value={InpSearch}
        className="form-control"
        onChange={(e) => setInpSearch(e.target.value)}
        placeholder="Search by title or description"
        />
      <button className="btn btn-dark" onClick={() => setbtnSearch(InpSearch)}>Search</button>
      <button className="btn btn-dark" onClick={resetFilters}>Reset Filters</button>
        </div>
      <h5>Categories:</h5>
      <div className="row g-3 align-items-center">
        <div className="btn-group">{BtnCategories()}</div>
      </div>
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
