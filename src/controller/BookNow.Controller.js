import createHttpError from "http-errors";
import UserBookNow from "../models/BookNow.model.js";
import mongoose from "mongoose";
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

const BookNowDataDriver = async (req, res, next) => {
    try {
      
      const bookings = await UserBookNow.find();
  
      
      res.status(200).json({
        message: "Booking data retrieved successfully",
        bookings: bookings
      });
    } catch (error) {
    
      const err = createHttpError(500, "Error occurred when retrieving booking data");
      return next(err);
    }
  };

  const singleBookdata = async (req, res, next) => {
    try {
      
      const { id } = req.params;
      console.log("Extracted ID:", id);
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(createHttpError(400, "Invalid booking ID format"));
      }
  
      
      const booking = await UserBookNow.findById(id);
      console.log("Found booking:", booking);
  
      
      if (!booking) {
        return next(createHttpError(404, "Booking not found"));
      }
  
      // Send successful response with the booking details
      res.status(200).json({
        message: "Booking data retrieved successfully",
        booking: booking
      });
    } catch (error) {
      console.error("Error:", error); // Log the actual error object
      const err = createHttpError(500, "Error occurred when retrieving booking data");
      return next(err);
    }
  };
  

export {BookNowData,BookNowDataDriver,singleBookdata};
