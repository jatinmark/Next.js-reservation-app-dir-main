import {  PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt" ;
import * as jose from "jose" ;
import {setCookie} from "cookies-next" ;

const prisma = new PrismaClient();

export default async function handler(
    req : NextApiRequest ,
    res : NextApiResponse) {

    if(req.method === "POST"){
        const errors : string[] = []
        const {email , password} = req.body ;
      
        const validationSchema = [
            {
                valid : validator.isEmail(email),
                errorMessage : "Email is invalid"
            },{
             valid : validator.isLength(password ,{
                min : 1
             }),
             errorMessage : "Password is not strong enough"
    },
        ];

        validationSchema.forEach((check)=>{
            if(!check.valid){
                errors.push(check.errorMessage) ;
            }
           })

           if(errors.length) {
            return res.status(400).json({errorMessage : errors[0]})
           }
         
    const user =await prisma.user.findUnique({
        where : {
            email
        }
    });

    if(!user){
        return res.status(401).json({errorMessage : "Email or password is invalid"})
    }

    const isMatch = await bcrypt.compare(password , user.password);

    if(!isMatch){
        return res.status(401).json({errorMessage : "Email or password is invalid"})
   }

     
   // creating jwt token using jose library
   
   const alg = "HS256"  //algorithm used to create jwt token
  
   const secret = new TextEncoder().encode(process.env.JWT_SECRET)

   const token = await new jose.SignJWT({email : user.email})
   .setProtectedHeader({alg})
   .setExpirationTime("24h")
   .sign(secret);   // it is a secret only know by server and developer stored in .env file 

   setCookie("jwt" , token ,{req , res  , maxAge : 60*6*24} ); //it saves the jwt as cookies in the client for 6 days
   
    return res.status(200).json({
      firstName : user.first_name,
      lastName : user.last_name,
      email : user.email,
      phone : user.phone,
      city : user.city,
    });
    }

    return res.status(404).json("Unknown endpoint");
}