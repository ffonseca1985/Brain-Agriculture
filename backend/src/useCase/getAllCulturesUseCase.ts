
import { CultureRepository } from "src/infra/dataBase/mocks/cultureRepository";
import UseCase from "src/uteis/useCase";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetAllCulturesUseCase implements UseCase<any, Array<string>> {

    constructor(@inject("CultureRepository") private _cultureRepository : CultureRepository) {}

    execute(request?: any): string[] {
        
        var states = this._cultureRepository.getAll()
        return states;
    }
}
