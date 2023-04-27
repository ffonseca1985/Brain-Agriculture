import { QueryTypes } from "sequelize";
import { sequelize } from "../connection"
import { injectable } from "tsyringe";

@injectable()
export class GraphicsTotalPerStateQuery {

    getTotal = async () : Promise<TotalPerStateDto[]> => {

        const query = "SELECT sum(1) as total, \"state\"  FROM \"Producer\" group by \"state\"";
        const result = await sequelize.query<TotalPerStateDto>(query, { type: QueryTypes.SELECT});
        const total = result;

        return total;
    }
}

export interface TotalPerStateDto {
    total: number;
    state: string
}