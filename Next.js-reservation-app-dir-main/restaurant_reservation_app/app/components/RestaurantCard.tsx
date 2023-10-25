import Link from "next/link";
import { RestaurantCardType } from "../page";

interface Props {
  restaurant : RestaurantCardType ;
}

const RestaurantCard = () => { 
    return (
        <>
        <Link href='/restaurant/ss-sd'>
          <div className='border curser-pointer w-64 h-72 m-3 rounded overflow-hidden '>
           <img src="https://resizer.otstatic.com/v2/photos/legacy/1/25549785.jpg"
           alt="image"
           className='w-full h-36' />
           <div className='p-1'>
             <h3 className='font-bold text-2xl mb-2'>
              Milstones Grill
             </h3>
             <div className='flex item-start'>
              <div className='flex- mb-2'>*****   </div>
              <p className='ml-2'>77 reviews</p>
             </div>
             <div className='flex text-reg font-light capitalize'>
              <p className='mr-3'>Mexican</p>
              <p className='mr-3'>$$$$</p>
              <p>Toronto</p>
             </div>
             <p className='text-sm font-bold mt-1'>Booked 3 times a day</p>
           </div>
          </div>
          </Link>
          </>
    );
}
export default RestaurantCard;