import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import Envconfig from "./config/config.js";
import createHttpError from "http-errors";
import globalErrorHandler from "./middlewers/globalErrorHandler.js";

import dotenv from "dotenv";
import BookNowData from "./controller/BookNow.Controller.js";
dotenv.config({ path: "./.env" });

// console.log(process.env);

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

app.get("/", (req, res) => {
  res.json({
    message: "This is Home Route",
  });

  const error = createHttpError(400, "Something went to wrong");
  throw error;
});

app.post("/bookNow",BookNowData);



// Global error handeler

app.use(globalErrorHandler);

export default app;
