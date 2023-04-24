import { UpdateProducerDto } from "@controllers/dtos/updateProducerDto";
import IProducerRespository from "src/domain/contracts/IProducerRespository";
import { IProducer } from "src/domain/entities/IProducer";
import UseCase from "src/uteis/useCase";
import { inject, injectable } from "tsyringe";
import { ProducerFactory } from "./factories/producer.factory";

@injectable()
export default class UpdateProducerUseCase implements UseCase<UpdateProducerDto, Promise<IProducer> | IProducer> {

    constructor(@inject("ProducerRespository") private _producerRespository: IProducerRespository) {}

    execute = async (request: UpdateProducerDto): Promise<IProducer> =>  {
        
        const producer = ProducerFactory.Create(request);
        const result =  await this._producerRespository.update(producer)
       
        return result
    }
}