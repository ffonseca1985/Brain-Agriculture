import { QueryTypes } from "sequelize";
import { sequelize } from "../connection"
import { injectable } from "tsyringe";

@injectable()
export class GraphicsTotaisQuery {

    getTotalQuantityFarm = async () : Promise<number> => {

        const query = "SELECT COUNT(*) as total FROM \"Producer\"";
        const result = await sequelize.query<TotalResult>(query, { type: QueryTypes.SELECT});
        const total = result[0].total;

        return total;
    }

    getTotalHectareFarm = async () : Promise<number> => {

        const query = "SELECT COALESCE(SUM(total), 0) as total FROM \"Producer\"";
        const result = await sequelize.query<TotalResult>(query, { type: QueryTypes.SELECT});
        const total = result[0].total;

        return total;
    }
}

interface TotalResult {
    total: number;
}