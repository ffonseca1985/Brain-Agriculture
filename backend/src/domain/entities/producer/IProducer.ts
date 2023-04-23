import { Farm } from "./farm";

export interface IProducer {
    id: string;
    name: string;
    farms: Farm[];
}