
import { StateRepository } from "src/infra/dataBase/mocks/stateRepository";
import UseCase from "src/uteis/useCase";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetAllStatesUseCase implements UseCase<any, Array<string>> {

    constructor(@inject("StateRepository") private _stateRepository : StateRepository) {}

    execute(request?: any): string[] {
        
        var states = this._stateRepository.getAll()
        return states;
    }
}
