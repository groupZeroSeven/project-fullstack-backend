import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import userRouter from "./Routes/users.route";
import { errorHandler } from "./Errors/error";
import cors from "cors";
import annoucementsRouter from "./Routes/annoucements.route";
import imagesRouter from "./Routes/images.route";

const app = express();
app.use(express.json());
app.use(cors());
app.use("", userRouter);
app.use("", annoucementsRouter);
app.use("", imagesRouter);

app.use(errorHandler);

export default app;
