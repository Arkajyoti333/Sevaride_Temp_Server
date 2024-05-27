import mongoose, { Schema } from "mongoose";

const BookNowSchema = new Schema(
  {
    pickUpLocation:{
        type:String,
        require:[true, 'pick Up Location is required']
    },
    dropOffLocation:{
        type:String,
        require:[true, 'drop Off Location is required']
    },
    distance:{
        type:Number,
        require:[true, 'distance is required']
    },
    rate:{
        type:Number,
        require:[true, 'Rate is required']
    }
  },
  {
    timestamps: true,
  }
);


const UserBookNow=mongoose.model("UserBookNow",BookNowSchema);

export default UserBookNow;