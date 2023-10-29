import { PrismaClient } from "@prisma/client";
import { NextApiRequest , NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt" ;
import * as jose from "jose" ;

export default async function handler(req: NextApiRequest , res : NextApiResponse) {

    if(req.method === "POST"){
    const prisma = new PrismaClient();

    const {firstname , lastname , email , phone ,city ,password } = req.body ;

     const errors : string[] =[

     ];
  const validationSchema = [
    {
        valid : validator.isLength(firstname,{
        min : 1 ,
        max : 20 ,
        }),
        errorMessage : "First name is invalid"
    },  {
        valid : validator.isLength(lastname,{
        min : 1 ,
        max : 20 ,
        }),
        errorMessage : "Last name is invalid"
    }, {
        valid : validator.isEmail(email),
        errorMessage : "Email is invalid"
    }, {
        valid : validator.isMobilePhone(phone),
        errorMessage : "Phone number is invalid"
    }, {
        valid : validator.isLength(city , {
            min:1 
        }),
        errorMessage : "City is invalid"
    },{
        valid : validator.isStrongPassword(password),
        errorMessage : "Password is not strong enough"
    }
  ];

   validationSchema.forEach((check) =>{
    if(!check.valid){
        errors.push(check.errorMessage) ;
    }
   })
   const userwithEmail = await prisma.user.findUnique({
    where : {
        email  
    }
   }) ;

   if(userwithEmail){
      res.status(400).json({errorMessage : "Email is associated with another account"})
   }
    
   if(errors.length) {
    return res.status(400).json({errorMessage : errors[0]})
   }

   // hashing

   const hashedPassword  = await bcrypt.hash(password , 10)

   // create  a user if user email is unique 

   const user = await prisma.user.create({
    data : {
        first_name : firstname ,
        last_name : lastname ,
        password : hashedPassword ,
        city ,
        email,
        phone
    }
   })

   // creating jwt token using jose library
   
   const alg = "HS256"  //algorithm used to create jwt token
  
   const secret = new TextEncoder().encode(process.env.JWT_SECRET)

   const token = await new jose.SignJWT({email : user.email})
   .setProtectedHeader({alg})
   .setExpirationTime("24h")
   .sign(secret);   // it is a secret only know by server and developer stored in .env file 

   
    res.status(200).json({
        hello: token
    });
}
}