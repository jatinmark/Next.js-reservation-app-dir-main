import { PrismaClient } from "@prisma/client";
import MenuCard from "../component/MenuCard";
import RestaurantNavBar from "../component/RestaurantNavBar";

export async function generateMetadata() {
	return {
		title: 'Menu of Milestones Grill (Toronto) | BookMyDining',
		description: 'Search',
	}
}
const prisma = new PrismaClient();

const fetchRestaurantmenu =async (slug:string) => {
  const restaurant =await prisma.restaurant.findUnique({
    where : {
       slug
    },
    select :{
      items : true ,
    }
  });
  if(!restaurant){
    throw new Error();
  }
  return restaurant.items
}

const Menu = async({params}:{params:{slug : string}}) => {
  const menu = await fetchRestaurantmenu(params.slug) ;

  return(
           <>
        <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavBar slug={params.slug} />
          <MenuCard menu ={menu} />
        </div>
     
      </>
);
}

export default Menu;