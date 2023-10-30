import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const  prisma = new PrismaClient() ;

export default async function handler(
    req : NextApiRequest ,
    res : NextApiResponse) {

        const bearerToken = req.headers["authorization"] as string ; //grabing token from header of endpoint named as authoriztion

      const token = bearerToken.split(" ")[1] ;
   
       // to decode jwt payload we use jsonwebtoken package but some times it generate 
       //  error in ssr app that's why we use jose package for other jwt token related actions
       
       const payload = jwt.decode(token) as {email : string } ;

       if(!payload.email) {
         return res.status(401).json({
            errorMessage  : "Unauthorized request"
        }) ; 
       }
       
      const user = await prisma.user.findUnique({
        where : {
            email : payload.email
        },
        select :{
         id : true ,
         first_name : true ,
        last_name : true ,
        email : true ,
        city : true ,
        phone : true ,
        }
      })

        return res.json({user})
    }