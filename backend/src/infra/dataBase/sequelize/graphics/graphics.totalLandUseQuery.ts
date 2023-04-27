import { QueryTypes } from "sequelize";
import { sequelize } from "../connection"
import { injectable } from "tsyringe";
import { TotalLandDto } from "@controllers/graphics/dtos/totalLandDto";

@injectable()
export class GraphicsTotalLandUseQuery {

    getTotal = async () : Promise<TotalLandDto> => {

        const query = "SELECT sum(\"total\") as total, sum(\"areaTotalAgricultable\") as totalAgricutable, sum(\"areaTotalAgricultable\") as totalVegetable FROM \"Producer\"";
        const result = await sequelize.query<TotalLandDto>(query, { type: QueryTypes.SELECT});
        const total = result[0];

        return total;
    }
}

