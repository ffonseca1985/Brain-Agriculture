import UseCase from "src/uteis/useCase";
import { injectable } from "tsyringe";

@injectable()
export class GetAllProducerUseCase implements UseCase<any, any> {

    execute(request?: any) {
        throw new Error("Method not implemented.");
    }
}