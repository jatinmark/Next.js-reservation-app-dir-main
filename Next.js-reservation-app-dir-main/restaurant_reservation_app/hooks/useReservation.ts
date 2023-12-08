import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

export default function useRervation() {
const [loading , setLoading] = useState(false)
const [error , setError] = useState(null)

const createReservation =async ({slug , partySize , day , time ,    bookerFirstName ,
bookerLastName ,
bookerPhone ,
bookerEmail  ,
bookerOccasion ,
bookerRequest ,
setDidBook } : {
    slug : string, time : string , day : string , partySize : string ,   bookerFirstName : string ,
bookerLastName : string ,
bookerPhone : string ,
bookerEmail :string ,
bookerOccasion : string ,
bookerRequest : string ,
setDidBook : Dispatch<SetStateAction<boolean>> }) => {
    console.log(
        {
            slug , 
            day , 
            time , 
            partySize
        }
    )
    setLoading(true)
    try {
        const response = await axios.post(`https://reservation-app-virid.vercel.app/api/restaurant/${slug}/reserve`, {
        bookerFirstName ,
        bookerLastName ,
        bookerPhone ,
        bookerEmail  ,
        bookerOccasion ,
        bookerRequest} , {
            params : {
                day , 
                time , 
                partySize
            }
        });
        setLoading(false) ;
        setDidBook(true) ;
        return response.data
    } catch (error : any) {
        setLoading(false)
        setError(error.response.data.errorMessage)
    }
}
return {loading , error , createReservation }
} 