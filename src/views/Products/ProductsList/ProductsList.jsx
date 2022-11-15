import React from "react";
import { useState, useEffect } from "react";
import CardProduct from "./CardProduct/CardProduct";

const ProductsList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  const getAllProducts = async () => {
    fetch("https://api.storerestapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json.data));
       setLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-wrap ">
      {/* loading */}
      {loading && "<p>loading...</p>"}
      {/* fetching data */}
      {(!loading && products.length) ? 
       products.map(product=>{return <CardProduct product={product}/>})
      : `<p>No product found</p>`}
    </div>
  );
};

export default ProductsList;
