import IProducerRespository from "src/domain/contracts/IProducerRespository";
import { CultureRepository } from "src/infra/dataBase/mocks/cultureRepository";
import { StateRepository } from "src/infra/dataBase/mocks/stateRepository";
import { ProducerRespository } from "src/infra/dataBase/sequelize/producerRespository";
import { GetAllStatesUseCase } from "src/useCase/getAllStates.useCase";
import InsertProducerUseCase from "src/useCase/producer/InsertProducer.useCase";
import { GetAllProducerUseCase } from "src/useCase/producer/getAllProducer.useCase";
import { container } from "tsyringe";

//Repositories
container.registerSingleton<StateRepository>("StateRepository", StateRepository);
container.registerSingleton<CultureRepository>("CultureRepository", CultureRepository);

//UseCase
container.registerSingleton<GetAllStatesUseCase>("GetAllStatesUseCase", GetAllStatesUseCase);
container.registerSingleton<GetAllProducerUseCase>("GetAllProducerUseCase", GetAllProducerUseCase);
container.registerSingleton<InsertProducerUseCase>("InsertProducerUseCase", InsertProducerUseCase);

//Repositories
container.registerSingleton<ProducerRespository>("ProducerRespository", ProducerRespository);