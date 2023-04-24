import { Request, Response } from "express";
import { GetAllCulturesUseCase } from "src/useCase/getAllCultures.useCase";
import { container } from "tsyringe"

export default class CultureController {

    async get(_: Request, response: Response) {

        const instanceUseCase = container.resolve(GetAllCulturesUseCase)
        const cultures = instanceUseCase.execute();

        response.status(201)
            .json(cultures);
    }
}