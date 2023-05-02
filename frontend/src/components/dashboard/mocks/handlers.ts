import { rest } from "msw";
import { URL_BACKEND } from "../../../configs/constants";

function getLands() {
    return rest.get(`${URL_BACKEND}/api/graphics/totais/land`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                total: 123231,
                totalagricutable: 123,
                totalvegetable: 123
            })
        );
    });
}

function getTotals() {
    return rest.get(`${URL_BACKEND}/api/graphics/totais`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                {
                    totalFarm: 1,
                    totalHectare: 123231
                })
        );
    });
}

export const handlers = [getLands(), getTotals()];