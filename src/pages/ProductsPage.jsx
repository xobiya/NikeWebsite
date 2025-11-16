import React from "react";
import { Nav } from "../components";
import PopularProducts from "../Sections/PopularProducts";

const ProductsPage = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <div className="max-container">
          <h1 className="text-4xl font-bold mb-6">Products</h1>
          <p className="text-gray-600 mb-8">Explore our full range of popular products.</p>
        </div>
        <PopularProducts />
      </section>
    </main>
  );
};

export default ProductsPage;
