"use client" ;
import useRervation from "@/hooks/useReservation";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

 
const Form = ({slug , date  , partySize} : {slug : string , date : string , partySize : string}) => {

   const [inputs , setInputs] = useState({
      bookerFirstName : "" ,
      bookerLastName : "" ,
      bookerPhone : "" ,
      bookerEmail : "" ,
      bookerOccasion : "" ,
      bookerRequest : "" 
   });

   const [day , time] = date.split("T")
   const [didBook , setDidBook]  = useState(false) ; 
    const [disabled , setDisabled] = useState(true) ;
    const {error , loading , createReservation} = useRervation()
     
useEffect(() => {                    // this logic used to disable the button until all required fields are filled 
   if(inputs.bookerEmail
       && inputs.bookerLastName 
       && inputs.bookerFirstName
       && inputs.bookerPhone){
   return  setDisabled(false);
   }
   return setDisabled(true) ;
} , [inputs]) ;

   const handleChangeInput =(e: React.ChangeEvent<HTMLInputElement>) =>{
      setInputs({
        ...inputs ,
        [e.target.name] : e.target.value 
      })
     }

     const handleClick = async() =>{
        const booking = await createReservation({
         slug ,
         partySize ,
         time ,
         day ,
         bookerEmail:   inputs.bookerEmail , 
         bookerLastName : inputs.bookerLastName ,
         bookerFirstName: inputs.bookerFirstName ,
         bookerPhone : inputs.bookerPhone ,
         bookerOccasion : inputs.bookerOccasion  ,
         bookerRequest : inputs.bookerRequest ,
         setDidBook
        })
     }

return (  <div className='mt-10 flex flex-wrap  justify-between w-[660px]'>
{didBook ? <div>
     <h1>You are all booked up</h1>
     <p>Enjoy your reservation</p>
</div> : (
   <>
   <input type='text' className='border rounded p-3 w-80 mb-4'
placeholder='First name' onChange={handleChangeInput} value={inputs.bookerFirstName} name="bookerFirstName">
</input>
<input type='text' className='border rounded p-3 w-80 mb-4'
placeholder='Last name' onChange={handleChangeInput} value={inputs.bookerLastName} name="bookerLastName">
</input>
<input type='text' className='border rounded p-3 w-80 mb-4'
placeholder='Phone no .' onChange={handleChangeInput} value={inputs.bookerPhone} name="bookerPhone">
</input>
<input type='text' className='border rounded p-3 w-80 mb-4'
placeholder='Email' onChange={handleChangeInput} value={inputs.bookerEmail} name="bookerEmail">
</input>
<input type='text' className='border rounded p-3 w-80 mb-4'
placeholder='Occasion (optional)' onChange={handleChangeInput} value={inputs.bookerOccasion} name="bookerOccasion">
</input>
<input type='text' className='border rounded p-3 w-80 mb-4'
placeholder='Request (optional)' onChange={handleChangeInput} value={inputs.bookerRequest} name="bookerRequest">
</input>
<button disabled={disabled || loading} className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'
onClick={handleClick}
>{loading ? <CircularProgress color="inherit" /> : "Complete reservation"}</button>
<p className='mt-4 text-sm'>
By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Message & data 
rates may apply. You can opt out of receiving text messages at any time i
n your account settings or by replying STOP.
</p></>
)}
</div> );
}
 
export default Form;