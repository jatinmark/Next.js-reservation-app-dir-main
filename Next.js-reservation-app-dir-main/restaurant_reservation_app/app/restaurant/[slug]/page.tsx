import Header from "./component/Header";
import RestaurantNavBar from "./component/RestaurantNavBar";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Description from "./component/Description";
import Images from "./component/Images";
import Reviews from "./component/Reviews";
import ReservationCard from "./component/ResarvationCard";

export async function generateMetadata() {
	return {
		title: 'Milestones Grill (Toronto) | BookMyDining',
		description: 'Search',
	}
}

const RestaurantDetailPage = () => {
    return ( 
     <>
    
      {/* description */}
        <div className='bg-white w-[70%] rounded p-3 shadow'>
         <RestaurantNavBar />
           <Title />
             <Rating />      
               <Description />
                <Images />
                  <Reviews />
         </div>   
      <div className='relative w-[26%] text-reg '>
        {/* -mt-14 */}
               <ReservationCard />
      </div>
   
      </>
);
}

export default RestaurantDetailPage;