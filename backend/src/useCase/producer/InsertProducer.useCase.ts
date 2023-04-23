import { producerDto } from "@controllers/dtos/producerDto";
import { IProducer } from "src/domain/entities/IProducer";
import UseCase from "src/uteis/useCase";
import { ProducerFactory } from "./factories/producer.factory";

export default class InsertProducerUseCase implements UseCase<producerDto, IProducer | null> {

    execute(request: producerDto): IProducer | null{
        
        const producer = ProducerFactory.Create(request);

        return null;
    }
}