import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import addCheckin from "./routes/addCheckin";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/checkin", addCheckin);

export default app;
