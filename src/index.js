import app from './app.js';
import DbConnection from "./dbConnection/DbConnect.js";
import  Envconfig  from "./config/config.js";


const port=Envconfig.port||3000;

DbConnection()
.then(()=>{
    app.on("errror", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
  app.listen(port,()=>{
    console.log(`Server is Listen at port : ${port}`);
  })
})
.catch((error)=>{
  console.error(`Mongodb Conneection error :${error}`);
})