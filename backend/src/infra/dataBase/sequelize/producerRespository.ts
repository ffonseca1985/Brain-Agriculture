import { IProducer } from "src/domain/entities/IProducer";
import { ProducerModel } from "./models/producer.model";
import IProducerRespository from "src/domain/contracts/IProducerRespository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProducerRespository implements IProducerRespository {

    save = async (producer: IProducer): Promise<IProducer> => {

        const model = {
            id: producer.id,
            name: producer.name
        }

        await ProducerModel.create(model)


        return producer;
    }
}