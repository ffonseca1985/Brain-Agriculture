import { IProducer } from "src/domain/entities/IProducer";
import ProducerModel from "./producer.model";
import { Farm } from "src/domain/entities/farm";

export const producerParse = (itens: ProducerModel[]): IProducer[] => {

    const producers: Array<IProducer> = itens.map(x => {

        const element = x.get();

        const producer: IProducer = {
            id: element.id,
            name: element.name,
            type: 1,
            farm: new Farm("test", "wrt", "werwr", ["123123", "ewerwer"], 223, 123)
        };

        return producer;
    });

    return producers;
}