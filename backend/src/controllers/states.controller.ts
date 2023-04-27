import { Request, Response } from "express";
import { GetAllStatesUseCase } from "src/useCase/getAllStates.useCase";
import { container } from "tsyringe"

export class StatesController {

    get(_: Request, response: Response) {

        try {
            const useCase = container.resolve(GetAllStatesUseCase);
            const result = useCase.execute();

            response.status(200).json(result);
        } catch (error) {
            response.status(500).json();
        }
    }
}