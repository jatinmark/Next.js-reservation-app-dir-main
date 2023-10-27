"use client" ;

import { useRouter } from "next/navigation";
import { useState } from "react";



const SearchBar = () => {
    const router = useRouter();
    const [location, setlocation] = useState('');

    return ( <div className='flex justify-center '>
    <input type="text" value={location} onChange={(e) => setlocation(e.target.value)} placeholder='Location , Restaurant or Cuisine' className='overflow-hidden p-3 rounded w-2/6 mr-5  mt-3'/>
     <button onClick={ () => {
      if(location==="") return ;
      router.push(`/search?city=${location}`) ;
      setlocation("");
      
     }} className='bg-red-600 text-white font-bold px-8  py-3 rounded mt-3'>Let's go</button>
    </div> );
}
 
export default SearchBar;