import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
import Stars from "./Stars";


interface Props {
  restaurant : RestaurantCardType ;
}

const RestaurantCard = async({restaurant}:Props) => { 

    return (
        <>
        <Link href={`/restaurant/${restaurant.slug}`}>
          <div className='border curser-pointer w-64 h-72 m-3 rounded overflow-hidden '>
           <img src={restaurant.main_image}
           alt="image"
           className='w-full h-36' />
           <div className='p-1'>
             <h3 className='font-bold text-2xl mb-2'>
              {restaurant.name}
             </h3>
             <div className='flex item-start'>
              <Stars reviews={restaurant.reviews} />
              <p className='ml-2'>
                {restaurant.reviews.length} review{restaurant.reviews.length >= 2 ? "s" : '' }
                 </p>
             </div>
             <div className='flex text-reg font-light capitalize'>
              <p className='mr-3'>{restaurant.cuisine.name}</p>
              <Price price = {restaurant.price} />
              <p>{restaurant.location.name}</p>
             </div>
             <p className='text-sm font-bold mt-1'>Booked 3 times a day</p>
           </div>
          </div>
          </Link>
          </>
    );
}
export default RestaurantCard;