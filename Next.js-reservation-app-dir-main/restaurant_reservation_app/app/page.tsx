import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard'
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';

export interface RestaurantCardType {
  id: number ;
      name : string ;
      main_image : string ;
      cuisine : Cuisine ;
      location : Location;
      price : PRICE
}

const prisma = new PrismaClient() ;

const fetchRestaurants =async () : Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select : {
      id: true ,
      name : true ,
      main_image : true ,
      cuisine : true ,
      location : true ,
      price : true 
    }
  }) ;
  return restaurants ; 
} 

export default async function Home() {
  
   const restaurants = await fetchRestaurants() ;

   console.log({restaurants}) ;
  return (
      <main>
       <Header />
        {/* CARDS */}
        <div className=' py-3 px-36 mt-10 flex flex-wrap'>
         {
          restaurants.map( (restaurant)=>(
            <RestaurantCard restaurant = {restaurant} />
          ))
         }
         
        </div>
      </main>
  )
}

// MqtabvcNC8ywqrUj