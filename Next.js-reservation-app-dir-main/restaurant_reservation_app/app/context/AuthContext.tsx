"use client"
import axios from 'axios';
import { getCookie } from 'cookies-next';
import React, { createContext, useEffect, useState } from 'react'

interface User {
    id: number ;
    firstName : string;
    lastName : string;
    email : string;
    city : string;
    phone : string;
}
interface State {
    loading : boolean ;
    data : User | null ;
    error : string | null
}

interface AuthState extends State{
    setAuthState: React.Dispatch<React.SetStateAction<State>>
}

export const AuthenticationContext = createContext<AuthState>({
    loading : false ,
    data : null ,
    error : null ,
    setAuthState : () => {}
    }) ;

function AuthContext({children} : {children : React.ReactNode ;}) {

    const [authState , setAuthState] = useState<State>({
    loading : true ,
    data : null ,
    error : null ,
    }) ;

    //this function saves the login info of user and it call itself with the help of useEffect at a moment user load a website
    const fetchUser = async() =>{
        setAuthState({
            data : null,
            error : null,
            loading : true,
        })
          try{
          const jwt = getCookie("jwt") ;
          if(!jwt) {
           return setAuthState({
                data : null,
                error : null,
                loading : false,
            }) ;
          }
          const response = await axios.get("https://reservation-app-virid.vercel.app/api/auth/me" , {
            headers : {
                Authorization : `Bearer ${jwt}`
            }
          })

          axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}` // it injects the bearer jwt token in all http request

          setAuthState({
            data : response.data,
            error : null,
            loading : false,
        }) ;
          }catch(error :any ){
            setAuthState({
                data : null,
                error : error.response.data.errorMessage,
                loading : false,
            }) ;
          }
       }

    useEffect(() => {
      fetchUser() ;
    }, [])
    
    
  return (
    <AuthenticationContext.Provider value={{
        ...authState ,
        setAuthState
    }}>{children}</AuthenticationContext.Provider>
  )
}

export default AuthContext
