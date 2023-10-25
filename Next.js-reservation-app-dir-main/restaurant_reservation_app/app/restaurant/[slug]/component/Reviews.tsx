const Reviews = () => {
    return (  <div>
        <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
           What 100 people are saying
        </h1>
        <div>
         {/* review cards */}
         <div className="border-b pb-7 mb-7">
          <div className='flex'>
           <div className='w-1/6 flex flex-col items-center'>
            <div className=' bg-blue-400 w-16 flex items-center justify-center rounded-full'>
              <h2 className='text-white text-2xl'>MJ</h2>
            </div>
            <p className='text-center'>Micheal Jordan</p>
           </div>
           <div className='ml-10 w-5/6'>
            <div className='flex items-center'>
              <div className='flex mr-5'>
                *****
              </div>
              </div>
              <div className='mt-5'>
                  <p className='text-lg font-light'>The service was excellent, yet the food left more to dream about. Food was good, but not exceptional. Service was very thorough and attentive. Thank you for your service.</p>
              </div>
           </div>
          </div>
        
         </div>
        </div>
       </div> );
}
 
export default Reviews;