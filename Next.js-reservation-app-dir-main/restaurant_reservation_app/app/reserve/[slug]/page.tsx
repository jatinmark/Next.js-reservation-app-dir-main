import { PrismaClient } from "@prisma/client";
import Form from "./component/Form";
import Header from "./component/Header";
import { notFound } from "next/navigation";


export async function generateMetadata({params ,} : {params:{slug:string}}) {
	return {
		title: `${params.slug} | BookMyDining`,
		description: 'Search',
	}
}

const prisma = new PrismaClient() ;

const fetchRestaurantBySlug =async (slug:string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where : {
      slug
    }
  })


if(!restaurant) {
  notFound() ;
}
return restaurant ;
}

const Reserve = async({params ,searchParams} : {params:{slug:string} ; searchParams : {date : string ; partySize : string }} ) => {
    
  const restaurant = await fetchRestaurantBySlug(params.slug)
  return (
      
            <div className='border-t h-screen'>
              <div className='py-9 w-3/5 m-auto'>
               <Header image={restaurant.main_image} name={restaurant.name} date={searchParams.date} partySize={searchParams.partySize} />
                 <Form  partySize={searchParams.partySize} slug={params.slug} date={searchParams.date} />
              </div>
            </div>
          
    );
}

export default Reserve;