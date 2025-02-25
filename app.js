import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // create express app

const PORT = process.env.PORT; // get port from .env file

//Listens for port request
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
