import React from 'react'

async function productList(){
    const responce = await fetch("https://dummyjson.com/products/");
    const data = await responce.json();
    return data.products;
}



export default async function page() {
    let products = await productList();
    // console.log(products);
  return (
    <div>page
    {
        products.map((item)=>{
            return <p>{item.title}</p>
        })
    }
    </div>
  )
}
