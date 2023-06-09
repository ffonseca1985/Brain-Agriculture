
import { IProducer } from "src/domain/entities/IProducer";
import UseCase from "src/uteis/useCase";
import { ProducerFactory } from "./factories/producer.factory";
import { inject, injectable } from "tsyringe";
import IProducerRespository from "src/domain/contracts/IProducerRespository";
import { CreateProducerDto } from "@controllers/producer/dtos/createProducerDto";

@injectable()
export default class InsertProducerUseCase implements UseCase<CreateProducerDto, Promise<IProducer> | IProducer> {

    constructor(@inject("ProducerRespository") private _producerRespository: IProducerRespository) {}

    execute = async (request: CreateProducerDto): Promise<IProducer> =>  {
        
        const producer = ProducerFactory.Create(request);
        const result =  await this._producerRespository.upsert(producer)
       
        return result
    }
}