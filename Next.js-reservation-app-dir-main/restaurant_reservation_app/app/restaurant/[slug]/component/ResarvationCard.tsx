"use client" ;
import { partySize , times } from "@/data/index";
import { time } from "console";
import { useState } from "react";
import DatePicker from "react-datepicker" ;

const ReservationCard = ({openTime , closeTime} : {openTime : string , closeTime : string}) => {

  const [selectedDate , setSelectedDate]  = useState<Date | null>(new Date())

  const handleChangDate = (date : Date | null) =>{
   if(date){
    return setSelectedDate(date) ;
   }
   return setSelectedDate(date) ;
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
      <select name='' className='py-3 border-b font-light h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' id=''>
        {partySize.map(size=>(
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
          <select name='' id='' className='py-3 border-b font-light'>
            {filterTimeByRestaurantOpenWindow().map((time) =>(
              <option value={time.time}>{time.displayTime}</option>
            ))}
          </select>
       </div>
    </div>
   <div className='mt-5'>
      <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>
      Find a time
      </button>
    </div>
    </div> );
}
 
export default ReservationCard;