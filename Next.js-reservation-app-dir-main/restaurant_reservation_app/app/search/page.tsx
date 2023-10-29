import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { Cuisine, PRICE, PrismaClient  } from "@prisma/client";


export async function generateMetadata() {
	return {
		title: 'Search | BookMyDining',
		description: 'Search',
    icons: {
      icon: '/favicon.ico'
    }
	}
}

const prisma = new PrismaClient();

const fetchRestaurantsByCity =async (searchParams: {
  city?: string | undefined;
  cuisine?: string | undefined;
  price?: PRICE | undefined;
}) => {
  
  const select = {
    id : true ,
    name : true , 
    price : true ,
    main_image  :true ,
    cuisine : true ,
    location : true ,
    slug :true ,
    reviews : true
  }
  
   if(!searchParams.city) return prisma.restaurant.findMany({select}) ;
  
   return prisma.restaurant.findMany({
    where : {
      location : {
        name : {
          equals : searchParams.city.toLowerCase(),
        },
      },
      cuisine : {
        name : {
          equals : searchParams.cuisine 
        }
      },
      price : {
          equals : searchParams.price 
      }
    },
    select
  })
}



const fetchLocation = async()=>{
 return prisma.location.findMany()
}

 
const fetchCuisine = async()=>{
  return prisma.cuisine.findMany()
 }
 


    const Search = async({searchParams} :{searchParams : {city ?: string, cuisine?: string , price?:PRICE}}) => {

     const cuisine = await fetchCuisine() ;
     const location = await fetchLocation();
    const restaurants = await fetchRestaurantsByCity(searchParams) ; 

   console.log(searchParams);
    
    return (
                   <>       
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'> 
         <SearchSideBar cuisine = {cuisine} searchParams={searchParams}  location= {location}/>
       <div className='w-5/6'>
        {restaurants.length ?( <>  {
      restaurants.map((restaurant) =>(
      <RestaurantCard restaurant = {restaurant} key={restaurant.id} /> ))} </>  )
      :<p> Sorry , we found no restaurants in this area </p>} 
       </div>
      </div>
     </>  
    );
}

export default Search;
