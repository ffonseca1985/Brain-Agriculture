import "reflect-metadata";
import "./infra/crosscutting/container"
import express from "express";
import bodyParser from 'body-parser';
import { routes } from "./routes";
import corsAppMiddleware from "./infra/crosscutting/midlewares/cors";
import helmet from 'helmet';

let app = express();

app.use(corsAppMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

 routes(app);

const port: any = process.env.PORT || 4001;
app.listen(port, () => { console.log(`app listening port  ${port}`)});