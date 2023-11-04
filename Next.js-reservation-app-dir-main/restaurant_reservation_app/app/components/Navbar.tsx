"use client" ;
import Link from "next/link";
import AuthModel from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext"; 
import useAuth from "@/hooks/useAuth";


const Navbar = () => {

  const {data ,loading} = useContext(AuthenticationContext)
  const {signout} = useAuth() ; 

return (
    <nav className='flex justify-between p-2  bg-white'>
    <Link href='/' className='text-2xl font-bold text-gray-700'>BookMyDining
    </Link>
    <div>
    {loading ? null : <div className='flex '>
      {data ? <button className="bg-red-600 text-white border  px-4 p-1 rounded-md mr-3"
      onClick={signout}>
        Sign out
        </button> :
      <>
         <AuthModel isSignin={true} />
            <AuthModel isSignin={false} />
      </>}
      </div>}
      </div>
  </nav>
);
}

export default Navbar;