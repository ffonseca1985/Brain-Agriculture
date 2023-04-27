import UseCase from "src/uteis/useCase";
import { inject, injectable } from "tsyringe";
import { GraphicsTotalPerStateQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totalPerStateQuery";
import { TotalPerStateDto } from "@controllers/graphics/dtos/totalLandDto";

@injectable()
export class GetTotalsByStateUseCase implements UseCase<any, TotalPerStateDto[]> {

    constructor(@inject("GraphicsTotalPerStateQuery") private _raphicsTotalPerStateQuery: GraphicsTotalPerStateQuery) {
    }

    execute =  async (): Promise<TotalPerStateDto[]> => {
        
        var totais = await this._raphicsTotalPerStateQuery.getTotal();
        return totais;
    }
}