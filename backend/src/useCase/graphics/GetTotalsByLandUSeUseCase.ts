import UseCase from "src/uteis/useCase";
import { TotalsDto } from "./dtos/totalsDto";
import { inject, injectable } from "tsyringe";
import { GraphicsTotaisQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totaisQuery";
import { GraphicsTotalLandUseQuery, TotalLandDto } from "src/infra/dataBase/sequelize/graphics/graphics.totalLandUseQuery";

@injectable()
export class GetTotalsByLandUSeUseCase implements UseCase<any, TotalLandDto[]> {

    constructor(@inject("GraphicsTotalLandUseQuery") private _graphicsTotalLandUseQuery: GraphicsTotalLandUseQuery) {
    }

    execute=  async (): Promise<TotalLandDto[]> => {
        
        const totals = await  this._graphicsTotalLandUseQuery.getTotal();
        return totals;
    }
}