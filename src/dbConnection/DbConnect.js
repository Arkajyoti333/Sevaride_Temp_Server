import mongoose from "mongoose" ;
import express from 'express';
import  Envconfig  from "../config/config.js";

const app = express();
const port = Envconfig.port;

const DbString = Envconfig.MongodbUrl;


const DbConnection=async()=>{
   const DBConnectionInstance=mongoose.connect(DbString)
   .then(()=>{
    console.log("Database Connected Successfully !!!");
   })
  .catch((Error)=>{
    console.error("Error connecting to the database:", Error);
  process.exit(1); // Exit the process if unable to connect to the database 
  })
      DBConnectionInstance.then(() => {
          let data=mongoose.connection.host;
          console.log(`Your Host Id Is :- ${data}`);
      }).catch((error) => {
          console.error("Error getting host:", error);
      });

}


export default DbConnection;











