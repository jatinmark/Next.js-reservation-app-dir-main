import MenuCard from "../component/MenuCard";
import RestaurantNavBar from "../component/RestaurantNavBar";

export async function generateMetadata() {
	return {
		title: 'Menu of Milestones Grill (Toronto) | BookMyDining',
		description: 'Search',
	}
}

const Menu = () => {
    return(
           <>
        <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavBar />
          <MenuCard />
        </div>
     
      </>
);
}

export default Menu;