import { findAvailableTables } from "@/services/restaurant/findAvailableTables";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient() ;
export default async function handler(req : NextApiRequest , res : NextApiResponse) {

  if(req.method === "POST"){
    const {slug , partySize , time , day }  = req.query as { slug : string ; partySize  : string ;  time : string ; day : string ;}

  const { bookerEmail , bookerPhone , bookerFirstName , bookerLastName , bookerOccasion , bookerRequest} = req.body

const restaurant = await prisma.restaurant.findUnique({
    where : {
        slug
    },
    select :{
      tables : true ,
      open_time : true ,
      close_time : true ,
      id : true
    }
})

  if(!restaurant){
    return res.status(400).json({
        errorMessage : "Restaurant not found"
    })
  }

  if(
       new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
       new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ){
    return res.status(400).json({
        errorMessage : "Restaurant is not open at the time"
    })
  }

  const searchTimesWithTables = await findAvailableTables({
    day ,
    time ,
    res ,
    restaurant
   })
   
   if(!searchTimesWithTables){
    return res.status(400).json({
        errorMessage : "Invalid data provided"
    })
  }

   const searchTimeWithTables = searchTimesWithTables.find((t) => {
    return t.date.toISOString === new Date(`${day}T${time}`).toISOString
   })

   if(!searchTimeWithTables){
    return res.status(400).json({
      errorMessage : "No availability , cannot book"
  });
   }

   const tablesCount : {
    2: number[] ;
    4: number[]
   }= {
    2:[],
    4 : []   // it takes the counting and ids of 2 and 4 seaters
   }

   searchTimeWithTables.tables.forEach((table) => {
    if (table.seats === 2){
      tablesCount[2].push(table.id);
    }else {
      tablesCount[4].push(table.id);
    }
   });

   const tablesToBook : number[] = [] ;   // logic is used to group the seates in order to use minimum no. of seats
   let seatsRemaining = parseInt(partySize) ;

   while(seatsRemaining > 0){
    if(seatsRemaining>=3){
      if(tablesCount[4].length){
        tablesToBook.push(tablesCount[4][0])
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4
      }else{
        tablesToBook.push(tablesCount[2][0])
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2
      }
    }else{
      if(tablesCount[2].length){
        tablesToBook.push(tablesCount[2][0])
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2
      }else{
        tablesToBook.push(tablesCount[4][0])   // we dont have 2 tables so we give 4 seated tables to 1 or 2 persom
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4
      }
    }
   }

   const booking  = await prisma.booking.create({
     data : {
      number_of_people : parseInt(partySize),
      booking_time : new Date(`${day}T${time}`),
      booker_email : bookerEmail ,
      booker_phone : bookerPhone ,
      booker_first_name : bookerFirstName ,
      booker_last_name : bookerLastName ,
      booker_occasion : bookerOccasion ,
      booker_request : bookerRequest , 
      restaurant_id : restaurant.id 
     }
   })

    const bookingOnTablesData = tablesToBook.map(table_id => {
      return {
        table_id ,
        booking_id : booking.id
      }
    })  

    await prisma.bookingsOnTables.createMany({
      data : bookingOnTablesData
    })

   return res.json({
    booking,
   
   });
  }
}


// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-11-07&time=14:00:00.000Z&partySize=4