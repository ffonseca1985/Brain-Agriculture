import { Router } from "express";
import ProducerController from "./controllers/producer/producer.controller";
import { StatesController } from "@controllers/states.controller";
import CultureController from "@controllers/culture.controlle";
import { GraphicsTotaisQuery } from "./infra/dataBase/sequelize/graphics/graphics.totaisQuery";
import GraphicsController from "@controllers/graphics/graphics.controller";

export const routes = (router: Router) => {

    router.get("/api/state", new StatesController().get);
    router.get("/api/culture", new CultureController().get);

    router.post("/api/producer", new ProducerController().post);
    router.get("/api/producer", new ProducerController().get);
    router.put("/api/producer", new ProducerController().put);
    router.delete("/api/producer/:id", new ProducerController().delete);

    router.get("/api/graphics/totais", new GraphicsController().getTotais);
    router.get("/api/graphics/totais/state", new GraphicsController().getTotaisPerState);
    router.get("/api/graphics/totais/land", new GraphicsController().getTotaisPerLandUse);
}