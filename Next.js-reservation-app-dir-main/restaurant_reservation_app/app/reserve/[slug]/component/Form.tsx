const Form = () => {
    return (  <div className='mt-10 flex flex-wrap  justify-between w-[660px]'>
    <input type='text' className='border rounded p-3 w-80 mb-4'
    placeholder='First name'>
    </input>
    <input type='text' className='border rounded p-3 w-80 mb-4'
    placeholder='Last name'>
    </input>
    <input type='text' className='border rounded p-3 w-80 mb-4'
    placeholder='Phone no .'>
    </input>
    <input type='text' className='border rounded p-3 w-80 mb-4'
    placeholder='Email'>
    </input>
    <input type='text' className='border rounded p-3 w-80 mb-4'
    placeholder='Occasion (optional)'>
    </input>
    <input type='text' className='border rounded p-3 w-80 mb-4'
    placeholder='Request (optional)'>
    </input>
    <button className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'>Complete reservation</button>
      <p className='mt-4 text-sm'>
      By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Message & data 
      rates may apply. You can opt out of receiving text messages at any time i
      n your account settings or by replying STOP.
      </p>
   </div> );
}
 
export default Form;