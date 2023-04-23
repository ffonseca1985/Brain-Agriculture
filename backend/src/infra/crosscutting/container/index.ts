import { StateRepository } from "src/infra/dataBase/mocks/stateRepository";
import { GetAllStatesUseCase } from "src/useCase/getAllStatesUseCase";
import { container } from "tsyringe";

//Repositories
container.registerSingleton<StateRepository>("StateRepository", StateRepository)


//UseCase
container.registerSingleton<GetAllStatesUseCase>("GetAllStatesUseCase", GetAllStatesUseCase)