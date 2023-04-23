import { Router } from "express";
import ProducerController from "./controllers/producer.controller";
import "reflect-metadata";

export const routes = (router: Router) => {

    router.post("/", new ProducerController().post);
}