"use client";
import Loading from "@/app/component/Loading";
import { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
import Notification from "../../component/Notification";

export default function page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchproduct() {
      try {
        const responce = await fetch("https://dummyjson.com/products");
        if (!responce) {
          throw new Error("Faild to fetch products");
        }
        const data = await responce.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchproduct();
  }, []);

  // if (loading) return <Loading />;
  if (error)
    return (
      <div>
        <Notification message={error} status="error" />
        Error : {error}{" "}
      </div>
    );

  return (
    <div className="container-fluid">
      Product list -Client component
      {/* <Notification message="This is a success message!" status="success" /> */}
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      {/* <ToastContainer /> */}
    </div>
  );
}
