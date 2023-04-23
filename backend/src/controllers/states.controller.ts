import { Request, Response } from "express";
import { GetAllStatesUseCase } from "src/useCase/getAllStatesUseCase";
import { container } from "tsyringe"

export class StatesController {

    get(request: Request, response: Response) {

        const useCase = container.resolve(GetAllStatesUseCase);
        const result = useCase.execute();

        response.status(200).json(result);
    }
}