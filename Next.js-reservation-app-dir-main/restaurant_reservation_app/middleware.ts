import {NextRequest , NextResponse} from "next/server" ; 
import * as jose from "jose" ;


export default  async function middleware(req : NextRequest, res : NextResponse) {

  
  const bearerToken = req.headers.get("authorization") as string ;

  if(!bearerToken){
          return new NextResponse(
            JSON.stringify({errorMessage : "Unauthorized request " }) , {status : 401}
          )
  }

  const token = bearerToken.split(" ")[1] ;

  if(!token){
    return new NextResponse(
        JSON.stringify({errorMessage : "Unauthorized request " }) , {status : 401}
      )
 }

 const secret = new TextEncoder().encode(process.env.JWT_SECRET)

 try{
  await jose.jwtVerify(token , secret) ;
 } catch(error) {
    return new NextResponse(
        JSON.stringify({errorMessage : "Unauthorized request " }) , {status : 401}
      )  
 }

}

// it is the middleware that run's before every endpoint route every single one even before home page but we want it to run only when user hit the auth endpoint 
// so we did below thing
export const  config = {
    matcher : ["/api/auth/me"]
}