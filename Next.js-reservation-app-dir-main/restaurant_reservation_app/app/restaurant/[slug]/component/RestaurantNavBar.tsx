import Link from "next/link";

const RestaurantNavBar = () => {
    return (
        <>
<nav className='flex text-reg border-b pb-2'>
          <Link href="/restaurant/ss-sd" className='mr-7'>Overview</Link>
          <Link href='/restaurant/ss-sd/menu' className='mr-7'>Menu
          </Link>
         </nav>
         </>
    )
};

export default RestaurantNavBar;