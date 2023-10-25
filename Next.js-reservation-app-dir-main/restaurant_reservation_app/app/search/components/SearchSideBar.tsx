const SearchSideBar = () => {
    return (
<div className='w-1/5'>
<div className='border-b pb-4'>
 <h1 className='mb-2'>Region</h1>
 <p className='font-light text-reg'>Agra</p>
 <p className='font-light text-reg'>Mathura</p>
 <p className='font-light text-reg'>Chennai</p>
 <p className='font-light text-reg'>Delhi</p>
 <p className='font-light text-reg'>Srinagar</p>
 <p className='font-light text-reg'>Noida</p>
</div>
<div className='border-b pb-4'>
 <h1 className='mb-2'>Cuisine</h1>
 <p className='font-light text-reg'>Japanese</p>
 <p className='font-light text-reg'>Italian</p>
 <p className='font-light text-reg'>Greek</p>
 <p className='font-light text-reg'>Spanish</p>
</div>
<div className='mt-3 pb-4'>
  <h1 className='mb-2'>Price</h1>
  <div className='flex'>
   <button className='border w-full text-reg font-light rounded-l p-2'>
     $
   </button>
   <button className='border-r border-t border-b w-full text-reg font-light p-2'>
     $$
   </button>
   <button className='border-r  border-t border-b w-full text-reg rounded-r font-light p-2'>
     $$$
   </button>
  </div>
</div>
</div>);
}

export default SearchSideBar;