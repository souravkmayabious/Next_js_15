import React from "react";
import Product from "./product";

async function productList() {
  const responce = await fetch("https://dummyjson.com/products/");
  const data = await responce.json();
  return data.products;
}

export default async function page() {
  let products = await productList();
  // console.log(products);
  return (
    <div className="container-fluid">
      <p> page server side rendering </p>
      {products.map((item) => {
       return <div>
          <h4>{item.title}</h4>
          <Product price={item.price} />
        </div>;
      })}
    </div>
  );
}
