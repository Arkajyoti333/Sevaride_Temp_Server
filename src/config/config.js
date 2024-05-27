import dotenv from 'dotenv';
dotenv.config();


 const ___config={
    port:process.env.PORT,
    MongodbUrl:process.env.MONGODB_URI,
    corsOrigin:process.env.CORS_ORIGIN,
    enviroment:process.env.NODE_ENV,
    jwtSecret:process.env.JWT_SECRET,
 }

 const Envconfig=Object.freeze(___config);

 export default Envconfig;



