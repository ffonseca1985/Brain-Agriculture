import "reflect-metadata";
import "./infra/crosscutting/container"

import express, { Router } from "express";
import { routes } from "./routes";
import bodyParser from 'body-parser';
import corsAppMiddleware from "./controllers/midlewares/cors";

let app = express();

app.use(corsAppMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

const port: any = process.env.PORT || 4001;
app.listen(port, () => { console.log(`app listening port  ${port}`)});