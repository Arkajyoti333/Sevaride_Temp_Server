import createHttpError from "http-errors";
import UserBookNow from "../models/BookNow.model.js";

const BookNowData = async (req, res, next) => {
    const { pickUpLocation, dropOffLocation, distance } = req.body;

   
    console.log( req.body)
    console.log(distance);
      
    // Check for missing fields before any database operation
    if (!pickUpLocation || !dropOffLocation || !distance) {
        const error = createHttpError(400, "All data are required!");
        return next(error);
    }
// console.log(pickUpLocation);
// console.log(dropOffLocation);
// console.log(distance);

    const rate = distance * 11||1;

    try {
        // Create a new document
        const newBookNowData = await UserBookNow.create({
            pickUpLocation,
            dropOffLocation,
            distance,
            rate:rate
        });

        res.status(201).json({
            message: "Booking created successfully",
            booking: {
                id: newBookNowData._id,
                pickUpLocation: newBookNowData.pickUpLocation,
                dropOffLocation: newBookNowData.dropOffLocation,
                distance: newBookNowData.distance,
                rate: newBookNowData.rate
            }
        });
    } catch (error) {
        const err = createHttpError(500, "Error occurred when registering Book Now data");
        return next(err);
    }
}

export default BookNowData;
