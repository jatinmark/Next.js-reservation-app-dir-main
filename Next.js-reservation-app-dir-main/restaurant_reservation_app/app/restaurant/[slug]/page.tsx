import Header from "./component/Header";
import RestaurantNavBar from "./component/RestaurantNavBar";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Description from "./component/Description";
import Images from "./component/Images";
import Reviews from "./component/Reviews";
import ReservationCard from "./component/ResarvationCard";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
export async function generateMetadata() {
	return {
		title: 'Milestones Grill (Toronto) | BookMyDining',
		description: 'Search',
	}
}
const prisma = new PrismaClient();

interface Restaurant  {
  id: number;
  name: string;
  slug: string;
  images: string[];
  description: string;
  reviews : Review[] ;
  open_time : string ;
  close_time : string ;
  
} 

const fetchRestaurantBySlug =async (slug:string):Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where : {
      slug,
    },
    select : {
      id : true ,
      name : true ,
      images : true ,
      description : true ,
      slug : true ,
      reviews : true ,
      open_time : true ,
      close_time : true ,

    }
  });
  if(!restaurant){
    notFound()
    // throw new Error("Can't Find Restaurant");
  }
  return restaurant ;
}

const RestaurantDetailPage = async({params}:{params : {slug : string}}) => {
 
  const restaurant = await fetchRestaurantBySlug(params.slug) ;


  return ( 
     <>
    
      {/* description */}
        <div className='bg-white w-[70%] rounded p-3 shadow'>
         <RestaurantNavBar slug ={restaurant.slug} />
           <Title name = {restaurant.name} />
             <Rating reviews = {restaurant.reviews} />      
               <Description description = {restaurant.description} />
                <Images images={restaurant.images} />
                  <Reviews reviews = {restaurant.reviews} />
         </div>   
      <div className='relative w-[26%] text-reg '>
        {/* -mt-14 */}
               <ReservationCard openTime ={restaurant.open_time} closeTime ={restaurant.close_time} />
      </div>
   
      </>
);
}

export default RestaurantDetailPage;