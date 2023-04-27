import UseCase from "src/uteis/useCase";
import { TotalsDto } from "./dtos/totalsDto";
import { inject, injectable } from "tsyringe";
import { GraphicsTotaisQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totaisQuery";
import { GraphicsTotalPerStateQuery, TotalPerStateDto } from "src/infra/dataBase/sequelize/graphics/graphics.totalPerStateQuery";

@injectable()
export class GetTotalsByStateUseCase implements UseCase<any, TotalPerStateDto[]> {

    constructor(@inject("GraphicsTotalPerStateQuery") private _raphicsTotalPerStateQuery: GraphicsTotalPerStateQuery) {
    }

    execute =  async (): Promise<TotalPerStateDto[]> => {
        
        var totais = await this._raphicsTotalPerStateQuery.getTotal();
        return totais;
    }
}