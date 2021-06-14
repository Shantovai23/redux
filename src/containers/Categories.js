import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  selectedCategory,
  selectedCategoryProductsstored,
} from "../redux/actions/productsActions";
import {Link} from 'react-router-dom'

const Categories = () => {
  const allCategories = useSelector(
    (state) => state.allCategories.allCategories
  );
  const products = useSelector(
    (state) => state.selectedCategory.selectedCategory
  );
  const showProducts = useSelector(
    (state) => state.selectedCategoryProducts.selectedCategoryProducts
  );
  const dispatch = useDispatch();
  const fetchAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      dispatch(getAllCategories(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectedCategoryProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${products}`
      );
      dispatch(selectedCategoryProductsstored(response.data));
      console.log("categoryProducts", response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);
  useEffect(() => {
    selectedCategoryProducts();
  }, [products]);


  const renderList = showProducts.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    
    );
  });

  return (
    <div className="ui container center ">
      <select
        style={{ marginTop: "100px", marginBottom: "20px" }}
        id="categories"
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(selectedCategory(e.target.value));
        }}
      >
        {allCategories.map((cat, ind) => {
          return (
            <option
              value={cat}
              selected={cat === "men's clothing" && "men's clothing"}
              key={ind}
            >
              {cat}
            </option>
          );
        })}
      </select>
      <div className='ui  grid container'>
      {renderList}
      </div>
     
    </div>
  );
};

export default Categories;
