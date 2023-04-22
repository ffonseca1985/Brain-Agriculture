import { Router } from "express";
import ProducerController from "./apresentation/producer.controller";

export const routes = (router: Router) => {

    router.post("/", new ProducerController().post);
}