import { useState } from "react";
import axios from "axios";

export default function useAvailabilities() {
const [loading , setLoading] = useState(false)
const [error , setError] = useState(null)
const [data , setData] = useState<{time : string ; available : boolean }[] | null>(null);

const fetchAvailabilities =async ({slug , partySize , day , time} : {slug : string, time : string , day : string , partySize : string}) => {
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
        const response = await axios.get(`https://reservation-app-virid.vercel.app/api/restaurant/${slug}/availability` , {
            params : {
                day , 
                time , 
                partySize
            }
        });
        setLoading(false)
        setData(response.data)
    } catch (error : any) {
        setLoading(false)
        setError(error.response.data.errorMessage)
    }
}
return {loading , data , error , fetchAvailabilities }
}