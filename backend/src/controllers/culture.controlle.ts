import { Request, Response } from "express";
import { GetAllCulturesUseCase } from "src/useCase/getAllCultures.useCase";
import { container } from "tsyringe"

export default class CultureController {

    async get(_: Request, response: Response) {

        try {
            const instanceUseCase = container.resolve(GetAllCulturesUseCase)
            const cultures = instanceUseCase.execute();

            response.status(201)
                .json(cultures);

        } catch (error) {
            response.status(500)
                .json();
        }
    }
}