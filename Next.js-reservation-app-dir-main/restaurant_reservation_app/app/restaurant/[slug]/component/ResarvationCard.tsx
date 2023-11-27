"use client" ;
import { partySize as partySizes , times } from "@/data/index";
import useAvailabilities from "@/hooks/useAvailabilities";
import { convertToDisplayTime } from "@/utils/convertToDisplayTime";
import { CircularProgress } from "@mui/material";
// import { convertToDisplayTime } from '@/utils/convertToDisplayTime'
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker" ;

const ReservationCard = ({openTime , closeTime , slug} : {openTime : string , closeTime : string ,  slug : string }) => {

  const [selectedDate , setSelectedDate]  = useState<Date | null>(new Date())
  const {loading , data , error , fetchAvailabilities} = useAvailabilities()
  const [time ,  setTime] = useState(openTime) ;
  const [partySize , setPartySize] = useState("2") ;
  const [day , setDay] = useState(new Date().toISOString().split("T")[0])
    
  const handleChangDate = (date : Date | null) =>{
   if(date){
    setDay(date.toISOString().split("T")[0])
    return setSelectedDate(date) ;
   }
   return setSelectedDate(date) ;
  }

  const handleClick = () => {
    fetchAvailabilities({
     slug ,
     day ,
     time ,
     partySize ,
    })
  }
    
   const filterTimeByRestaurantOpenWindow = () =>{
    const timesWithWindow : typeof times =[] ;

    let isWithinWindow = false ;

    times.forEach((time) => {
      if(openTime === time.time){
        isWithinWindow = true ;
      }
      if(isWithinWindow){
        timesWithWindow.push(time)
      }
      if(time.time===closeTime){
          isWithinWindow = false ;
      }
    });
    return timesWithWindow
   }
  
    return (  <div className='fixed w-[20%]  bg-white rounded p-3 shadow'>  
    <div className='text-center border-b pb-2 font-bold'>
      <h4 className='mr-7 text-lg'>Make a reservation</h4>
    </div>
    <div className='my-3 flex flex-col'>
      <label htmlFor=''>Party size</label>
      <select name='' onChange={(e) => setPartySize(e.target.value) }
       value={partySize} 
       className='py-3 border-b font-light h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' id=''>
        {partySizes.map(size=>(
          <option value={size.value}>{size.label}</option>
        ))}
      </select>
    </div>
    <div className='flex justify-between'>
       <div className="flex flex-col w-[48%]">
        <label htmlFor=''>Date</label>
        <DatePicker selected={selectedDate} onChange={handleChangDate} className="py-3 border-b font-light text-reg w-28" dateFormat="MMMM d" wrapperClassName="[48%]"  />
       </div>
       <div className="flex flex-col w-[48%]">
        <label htmlFor=''>Time</label>
          <select name='' id='' className='py-3 border-b font-light' value={time} onChange={(e) => setTime(e.target.value)}>
            {filterTimeByRestaurantOpenWindow().map((time) =>(
              <option value={time.time}>{time.displayTime}</option>
            ))}
          </select>
       </div>
    </div>
   <div className='mt-5'>
      <button disabled = {loading} className='bg-red-600 rounded w-full px-4 text-white font-bold h-16' onClick={handleClick}>
     {loading ? <CircularProgress color="inherit" /> : "Find a time"}
      </button>
    </div>
    {data && data.length ? (
      <div className="mt-4">
        <p className="text-reg"> Select a Time</p>
        <div className="flex flex-wrap mt-2">
          {
            data.map(time => {
              return time.available ? (<Link href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}` } className="bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3" >
                <p className="text-sm font-bold">
                 {/* @ts-ignore */}
                {convertToDisplayTime(time.time)}            
                </p>
              </Link>) : (<p className="bg-gray=300 p-2 w-24 mb-3 rounded mr-3"></p> ) ;
            })}
        </div>
        </div>
    ) : null }
    </div> );
}
 
export default ReservationCard;