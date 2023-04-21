import { Farm } from "./farm";

export interface IProdutor {
    id: string;
    name: string;
    farms: Farm[];
}