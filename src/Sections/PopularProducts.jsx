import { products } from "../Constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id='products' className='max-container'>
      <h2 className='text-4xl font-bold text-center mb-10'>Our <span className='text-coral-red'>Popular</span> Products</h2>
      <p className='text-center text-gray-600 mb-8 lg:min-w-lg mt-2 font-montserrat'>Discover our most popular products that our customers love.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
            <PopularProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts