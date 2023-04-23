import State from "@domain/entities/states";
import { StateRepository } from "src/infra/dataBase/mocks/stateRepository";
import UseCase from "src/uteis/useCase";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetAllStatesUseCase implements UseCase<any, Array<State>> {

    constructor(@inject("StateRepository") private _stateRepository : StateRepository) {}

    execute(request?: any): State[] | Promise<State[]> {
        
        var states = this._stateRepository.getAll()
        return states;
    }
}
