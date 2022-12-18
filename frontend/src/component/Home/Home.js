


import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [articlen,setArticleId] = useState([])
  const article = { product_name: "Dell Inspiron 15 3511 Core i3 11th Gen" };
  useEffect(() => {
    axios.post('http://127.0.0.1:8000/products_prediction', article)
    .then(response => setArticleId(response));
   
    
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());

    // const records = await Model.find({ '_id': { $in: ids } });
  }, [dispatch, error, alert]);
  // console.log(articlen.data);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Gadget" />

          <div className="banner">
            <p>Welcome to Gadgestic</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;