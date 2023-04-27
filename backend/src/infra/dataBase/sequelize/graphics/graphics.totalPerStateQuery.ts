import { QueryTypes } from "sequelize";
import { sequelize } from "../connection"
import { injectable } from "tsyringe";
import { TotalPerStateDto } from "@controllers/graphics/dtos/totalLandDto";

@injectable()
export class GraphicsTotalPerStateQuery {

    getTotal = async () : Promise<TotalPerStateDto[]> => {

        const query = "SELECT sum(1) as total, \"state\"  FROM \"Producer\" group by \"state\"";
        const result = await sequelize.query<TotalPerStateDto>(query, { type: QueryTypes.SELECT});
        const total = result;

        return total;
    }
}