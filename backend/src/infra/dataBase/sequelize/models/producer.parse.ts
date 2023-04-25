import { IProducer } from "src/domain/entities/IProducer";
import ProducerModel from "./producer.model";
import { Farm } from "src/domain/entities/farm";

export const producerParse = (itens: ProducerModel[]): IProducer[] => {

    const producers: Array<IProducer> = itens.map(x => {

        const element : ProducerModel = x.get();

        const producer: IProducer = {
            id: element.id,
            name: element.name,
            type: element.type,
            farm: new Farm(element.farmName, element.city, element.state, ["123123", "ewerwer"], element.areaTotalAgricultable, element.areaTotalVegetacao)
        };

        return producer;
    });

    return producers;
}