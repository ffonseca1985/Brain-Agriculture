import { CultureRepository } from "src/infra/dataBase/mocks/cultureRepository";
import { StateRepository } from "src/infra/dataBase/mocks/stateRepository";
import { GetAllStatesUseCase } from "src/useCase/getAllStatesUseCase";
import { container } from "tsyringe";

//Repositories
container.registerSingleton<StateRepository>("StateRepository", StateRepository);
container.registerSingleton<CultureRepository>("CultureRepository", CultureRepository);

//UseCase
container.registerSingleton<GetAllStatesUseCase>("GetAllStatesUseCase", GetAllStatesUseCase)