import Link from "next/link";

const Navbar = () => {
return (
    <nav className='flex justify-between p-2  bg-white'>
    <Link href='/' className='text-2xl font-bold text-gray-700'>BookMyDining
    </Link>
    <div>
    <div className='flex '>
      <button  className='bg-red-600 text-white border  px-4 p-1 rounded-md mr-3'>Sign in</button>
      <button className=' text-gray-700 border p-1 px-4 rounded-md hover:text-gray-900 mr-4 '>Sign up</button>
      </div>
      </div>
  </nav>
);
}

export default Navbar;