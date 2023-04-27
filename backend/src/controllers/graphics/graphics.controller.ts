import { Request, Response } from "express";
import { GetTotalsByLandUSeUseCase } from "src/useCase/graphics/GetTotalsByLandUSeUseCase";
import { GetTotalsByStateUseCase } from "src/useCase/graphics/GetTotalsByStateUseCase";
import { GetTotaisUseCase } from "src/useCase/graphics/getTotals.useCase";
import { container } from "tsyringe";

export default class GraphicsController {

    async getTotais(_: Request, response: Response) {

        try {

            const useCaseInstance = container.resolve(GetTotaisUseCase);
            const result = await useCaseInstance.execute();

            response.status(200).json(result);

        } catch (error) {

            response.status(500)
            .json();
        }
    }

    async getTotaisPerState(_: Request, response: Response) {

        try {
            
            const useCaseInstance = container.resolve(GetTotalsByStateUseCase);

            const result = await useCaseInstance.execute();
            response.status(200).json(result);
                
        } catch (error) {
            response.status(500)
            .json();
        }
    }

    async getTotaisPerLandUse(_: Request, response: Response) {

        try {
            
            const useCaseInstance = container.resolve(GetTotalsByLandUSeUseCase);

            const result = await useCaseInstance.execute();
            response.status(200).json(result);

        } catch (error) {
            response.status(500)
            .json();
        }
    }
}