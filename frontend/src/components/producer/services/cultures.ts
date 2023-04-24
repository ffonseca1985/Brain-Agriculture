import axios from "axios";
import { URL_BACKEND } from "../../../configs/constants";

export const getCulture = async () : Promise<Array<string>> => {

    var response = await  axios.get(`${URL_BACKEND}/api/culture`);
    var result: Array<string> = response.data;

    return result;
}