import { Review } from "@prisma/client";

const calculateReviewRatingAveraga = (reviews : Review[]) => {
    if (!reviews.length) return 0 ;

    return ( 
        reviews.reduce((sum,review)=>{
            return sum+review.rating ;
        } ,0)/reviews.length
     );
}
 
export default calculateReviewRatingAveraga;