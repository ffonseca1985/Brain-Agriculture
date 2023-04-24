import { ProducerDto } from "@controllers/dtos/producerDto";
import { IProducer } from "src/domain/entities/IProducer";
import UseCase from "src/uteis/useCase";
import { ProducerFactory } from "./factories/producer.factory";
import { inject, injectable } from "tsyringe";
import IProducerRespository from "src/domain/contracts/IProducerRespository";

@injectable()
export default class InsertProducerUseCase implements UseCase<ProducerDto, Promise<IProducer> | IProducer> {

    constructor(@inject("ProducerRespository") private _producerRespository: IProducerRespository) {}

    execute = async (request: ProducerDto): Promise<IProducer> =>  {
        
        const producer = ProducerFactory.Create(request);
        const result =  await this._producerRespository.save(producer)
       
        return result
    }
}