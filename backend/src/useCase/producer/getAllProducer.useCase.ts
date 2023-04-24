import { ProducerDto } from "@controllers/dtos/getAllProducerDto";
import IProducerRespository from "src/domain/contracts/IProducerRespository";
import { IProducer } from "src/domain/entities/IProducer";
import UseCase from "src/uteis/useCase";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetAllProducerUseCase implements UseCase<any,  ProducerDto[]> {

    constructor(@inject("ProducerRespository") private _producerRespository: IProducerRespository) {}

    execute = async () => {
        
        const producers = await this._producerRespository.getAll()
        const transform = this.transform(producers);


        return transform;
    }

    
    transform = (producers: Array<IProducer>) : ProducerDto[] => {

        const parse = producers.map(x => {

            let producer: ProducerDto = {
                id: x.id,
                nomeProdutor: x.name,
                tipo: x.type,
                nomeFazenda: x.farm.name,
                cidade: x.farm.address.city,
                estado: x.farm.address.state,
                areaTotalAgricultavel: x.farm.totalArable.total,
                areaTotalVegetacao: x.farm.totalVegetated.total,
                culturas: x.farm.cultures
            }

            return producer;
        });
        
        return parse;
    }
}