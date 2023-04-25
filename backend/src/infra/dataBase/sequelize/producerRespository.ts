import { IProducer } from "src/domain/entities/IProducer";
import { ProducerModel } from "./models/producer.model";
import IProducerRespository from "src/domain/contracts/IProducerRespository";
import { injectable } from "tsyringe";
import { producerParse } from "./models/producer.parse";

@injectable()
export class ProducerRespository implements IProducerRespository {

    delete = async (id: string) : Promise<boolean> => {

        let number = await ProducerModel.destroy({ where: { id: id }})
        return number > 0;
    }

    update = async (producer: IProducer) : Promise<IProducer> => {

        await ProducerModel.update(producer, { where: { id: producer.id} });
        return producer;
    }

    save = async (producer: IProducer): Promise<IProducer> => {

        const model = {
            id: producer.id,
            name: producer.name,
            type: producer.type,
            farmName: producer.farm.name,
            city: producer.farm.address.city,
            state: producer.farm.address.state,
            areaTotalAgricultable: producer.farm.totalArable.total,
            areaTotalVegetacao: producer.farm.totalVegetated.total,
            total: producer.farm.total.total,
            cultures: producer.farm.cultures.join(",")
        }

        await ProducerModel.create(model)
        return producer;
    }

    getAll = async (): Promise<IProducer[]> => {

        var itens: ProducerModel[] = await ProducerModel.findAll();
        const parse: IProducer[] = producerParse(itens)

        return parse;
    }
}