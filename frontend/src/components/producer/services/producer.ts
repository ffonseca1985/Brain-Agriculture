
import axios from "axios";
import { URL_BACKEND } from "../../../configs/constants";
import { Producer } from "./types";

export const create = async (producer : Producer) : Promise<Producer> => {

    var response = await  axios.post(`${URL_BACKEND}/api/producer`, producer);
    var result: Producer = response.data;

    return result
};

export const getAll = async (): Promise<Array<Producer>> => {

    var response = await  axios.get(`${URL_BACKEND}/api/producer`);
    var result: Array<Producer> = response.data;

    return result
}

export const deleteById = async (id: string) => {
    await axios.delete(`${URL_BACKEND}/api/producer/${id}`);
}

export const update = async (producer : Producer) => {
    await axios.put(`${URL_BACKEND}/api/producer`, producer);
}

