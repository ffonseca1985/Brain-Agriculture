import { Router } from "express";
import ProducerController from "./controllers/producer.controller";
import { StatesController } from "@controllers/states.controller";
import CultureController from "@controllers/culture.controlle";

export const routes = (router: Router) => {

    router.get("/api/state", new StatesController().get);
    router.get("/api/culture", new CultureController().get);
    router.post("/api/producer", new ProducerController().post);
}