//7aDBl69hTs4Aplag
import express from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records.js';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

 const mongoURI = "mongodb+srv://gagandeeplubana1221:7aDBl69hTs4Aplag@personalfinancetracker.8hwpxx4.mongodb.net/";

 mongoose.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB")).catch((err) => console.error("Failed to connect to MongoDB", err))

app.use('/financial-records', financialRecordRouter);

 app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`)
 })

 
