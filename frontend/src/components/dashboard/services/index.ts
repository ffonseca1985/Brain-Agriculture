
import axios from "axios";
import { URL_BACKEND } from "../../../configs/constants";
import { Totals } from "./types";

export const getTotalByState = async () => {

    const url: string = `${URL_BACKEND}/api/graphics/totais/state`

    const response = await axios.get(url);
    const result = response.data;

    return result;
}

export const getTotalByLand = async () => {

    const url: string = `${URL_BACKEND}/api/graphics/totais/land`

    const response = await axios.get(url);
    const result = response.data;

    return result;
}

export const getTotais = async () : Promise<Totals> => {

    const url: string = `${URL_BACKEND}/api/graphics/totais`

    const response = await axios.get(url);
    const result: Totals = response.data;

    return result;
}