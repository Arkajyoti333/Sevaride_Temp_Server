import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
// import createHttpError from "http-errors";
import Envconfig from "./config/config.js";
import globalErrorHandler from "./middlewers/globalErrorHandler.js";
import BookNowRouter from "./routes/BookNow/Booknow.route.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json({ limit: "21kb" }));

app.use(
  cors({
    origin: Envconfig.corsOrigin,
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "21kb",
  })
);
app.use(cookieParser());

app.use(express.static("public"));

app.use("/api/bookNow", BookNowRouter); //Register  BookNow data post route



app.get("/",(req,res)=>{
  res.json({
    message:"this is home route",
  })
})


// Global error handler
app.use(globalErrorHandler);

export default app;
