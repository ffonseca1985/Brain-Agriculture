import { Farm } from "./farm";

export interface IProducer {
    id: string;
    name: string;
    type: ProducerType;
    farm: Farm;
}

export enum ProducerType {
    Phisical,
    Legal
}