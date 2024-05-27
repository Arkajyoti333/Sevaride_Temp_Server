import createHttpError from "http-errors"
import UserBookNow from "../../models/BookNow.model.js"

const BookNowData=(req,res,next)=>{
 
    const {pickUpLocation,dropOffLocation,distance}=req.body;
   
    try {

        // res.json({
        //     pickUpLocation,
        //     dropOffLocation,
        //     distance,
        //     rate:distance*10
        // })
        
    } catch (error) {
        const err=createHttpError(401,"Error occure when ! Book now Data register ")
         return next(err) 
    }
   
}


export default BookNowData;