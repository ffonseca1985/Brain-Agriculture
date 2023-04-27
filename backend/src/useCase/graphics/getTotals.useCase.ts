import UseCase from "src/uteis/useCase";
import { inject, injectable } from "tsyringe";
import { GraphicsTotaisQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totaisQuery";
import { TotalsDto } from "@controllers/graphics/dtos/totalsDto";

@injectable()
export class GetTotaisUseCase implements UseCase<any, TotalsDto> {

    constructor(@inject("GraphicsTotaisQuery") private _graphicsTotaisQuery: GraphicsTotaisQuery) {
    }

    execute=  async (): Promise<TotalsDto> => {
        
        const totalFarm = await  this._graphicsTotaisQuery.getTotalQuantityFarm();
        const totalHectare = await  this._graphicsTotaisQuery.getTotalHectareFarm();

        const totals :TotalsDto = 
        {
            totalFarm,
            totalHectare
        };

        return totals;
    }
}