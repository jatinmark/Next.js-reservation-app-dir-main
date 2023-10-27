import { Cuisine , Location, PRICE,  } from "@prisma/client";
import Link from "next/link";

interface Region {
  cuisine: Cuisine[];
  location : Location[] ;
  searchParams:{city ?: string, cuisine?: string , price?:PRICE}    // for type checking 
}


const SearchSideBar = ({cuisine , location , searchParams} : Region) => {

  
    const prices = [{
      price : PRICE.CHEAP,
      label : '$',
      className :'border w-full text-reg font-light text-center rounded-l p-2'
    },
    {price : PRICE.REGULAR,
      label : '$$',
      className:'border-r border-t border-b text-center w-full text-reg font-light p-2'},
      {price : PRICE.EXPENSIVE,
        label : '$$$',
        className:'border-r  border-t border-b w-full text-reg text-center rounded-r font-light p-2'}
      ]
  

    return (
<div className='w-1/5'>
<div className='border-b pb-4 flex flex-col'>
 <h1 className='mb-2 font-bold'>Region</h1>
 {
  location.map((location) => (
   <Link href={{
    pathname : "/search",
    query : {
       ...searchParams ,
       city : location.name,
    },
   }}
    className='font-light text-reg capitalize' key={location.id}>{location.name}</Link>
  
  ))
 }
</div>
<div className='border-b pb-4 flex flex-col'>
 <h1 className='mb-2 font-bold'>Cuisine</h1>
 { 
  cuisine.map((cuisine) => (
    
<Link href={{
    pathname : "/search",
    query : {
       ...searchParams ,
       cuisine : cuisine.name,
    },
   }} className='font-light text-reg capitalize' key={cuisine.id} >
      {cuisine.name}
     </Link>
  ))
 }
 
</div>
<div className='mt-3 pb-4'>
  <h1 className='mb-2 font-bold'>Price</h1>
  <div className='flex'>
    {
      prices.map(({price , label , className})=>(
        <Link href={{
          pathname : "/search",
          query : {
             ...searchParams ,
             price 
          },
         }} className={className}>
           {label}
         </Link> 
      ))
    }
  </div>
</div>
</div>);
}

export default SearchSideBar;