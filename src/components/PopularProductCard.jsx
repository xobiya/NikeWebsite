import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price}) => {
  return (
       <div className='flex flex-1 flex-col w-full max-sm:w-full '>
      <img src={imgURL} alt={name} className='w-[290px] h-[280px] object-cover rounded-lg mb-4' />
      <div className="mt-8 flex justify-start gap-2.5 w-[24px] h-[24]">
        <img src={star} alt="rating" />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">4.3</p>
      </div>
    <h3 className='text-xl font-semibold text-coral-red font-montserrat'>{name}</h3>
    <p className='text-gray-600 font-montserrat'>{price}</p></div>
  )
}

export default PopularProductCard