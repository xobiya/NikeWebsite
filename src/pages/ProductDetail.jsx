import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../Constants";
import { Nav } from "../components";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="relative">
        <Nav />
        <section className="padding">
          <div className="max-container">
            <h2 className="text-2xl font-semibold">Product not found</h2>
            <p className="mt-4">We couldn't find the product you're looking for.</p>
            <Link to="/products" className="mt-6 inline-block text-coral-red">Back to products</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <img src={product.imgURL} alt={product.name} className="w-full max-w-lg object-cover rounded-lg" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-coral-red font-semibold mb-4">{product.price}</p>
            <p className="text-gray-600 mb-6">A premium shoe offering top comfort and style. Crafted with high-quality materials and designed for performance.</p>
            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-md">Add to cart</button>
              <Link to="/products" className="text-gray-600">Back to products</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
