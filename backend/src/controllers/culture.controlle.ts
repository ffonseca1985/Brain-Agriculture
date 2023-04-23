import { Request, Response } from "express";
import { GetAllCulturesUseCase } from "src/useCase/getAllCulturesUseCase";
import { container } from "tsyringe"

export default class CultureController {

    async get(request: Request, response: Response) {

        const instanceUseCase = container.resolve(GetAllCulturesUseCase)
        const cultures = instanceUseCase.execute();

        response.status(201)
            .json(cultures);
    }
}