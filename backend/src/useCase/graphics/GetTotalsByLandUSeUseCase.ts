import UseCase from "src/uteis/useCase";
import { inject, injectable } from "tsyringe";
import { GraphicsTotalLandUseQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totalLandUseQuery";
import { TotalLandDto } from "@controllers/graphics/dtos/totalLandDto";

@injectable()
export class GetTotalsByLandUSeUseCase implements UseCase<any, TotalLandDto> {

    constructor(@inject("GraphicsTotalLandUseQuery") private _graphicsTotalLandUseQuery: GraphicsTotalLandUseQuery) {}

    execute=  async (): Promise<TotalLandDto> => {
        
        const totals = await this._graphicsTotalLandUseQuery.getTotal();
        return totals;
    }
}