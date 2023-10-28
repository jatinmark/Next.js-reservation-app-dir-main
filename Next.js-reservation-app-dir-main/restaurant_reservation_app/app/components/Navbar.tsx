import Link from "next/link";
import AuthModel from "./AuthModal";

const Navbar = () => {
return (
    <nav className='flex justify-between p-2  bg-white'>
    <Link href='/' className='text-2xl font-bold text-gray-700'>BookMyDining
    </Link>
    <div>
    <div className='flex '>
            <AuthModel isSignin={true} />
            <AuthModel isSignin={false} />
      </div>
      </div>
  </nav>
);
}

export default Navbar;