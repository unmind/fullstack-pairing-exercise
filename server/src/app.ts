import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import checkinController from "./routes/checkin";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/checkin", checkinController);

export default app;
