import IProducerRespository from "src/domain/contracts/IProducerRespository";
import UseCase from "src/uteis/useCase";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteProducerUseCase implements UseCase<any,  boolean> {

    constructor(@inject("ProducerRespository") private _producerRespository: IProducerRespository) {}

    execute = async (id: string) : Promise<boolean> => {
        
        const result = await this._producerRespository.delete(id)
        return result;
    }
}