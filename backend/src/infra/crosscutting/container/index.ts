import { CultureRepository } from "src/infra/dataBase/mocks/cultureRepository";
import { StateRepository } from "src/infra/dataBase/mocks/stateRepository";
import { ProducerRespository } from "src/infra/dataBase/sequelize/producerRespository";
import { GetAllStatesUseCase } from "src/useCase/getAllStates.useCase";
import InsertProducerUseCase from "src/useCase/producer/InsertProducer.useCase";
import { DeleteProducerUseCase } from "src/useCase/producer/deleteProducer.useCase";
import { GetAllProducerUseCase } from "src/useCase/producer/getAllProducer.useCase";
import UpdateProducerUseCase from "src/useCase/producer/updateProducer.useCase";
import { container } from "tsyringe";

//Repositories
container.registerSingleton<StateRepository>("StateRepository", StateRepository);
container.registerSingleton<CultureRepository>("CultureRepository", CultureRepository);

//UseCase
container.registerSingleton<GetAllStatesUseCase>("GetAllStatesUseCase", GetAllStatesUseCase);
container.registerSingleton<GetAllProducerUseCase>("GetAllProducerUseCase", GetAllProducerUseCase);
container.registerSingleton<InsertProducerUseCase>("InsertProducerUseCase", InsertProducerUseCase);
container.registerSingleton<DeleteProducerUseCase>("DeleteProducerUseCase", DeleteProducerUseCase);
container.registerSingleton<UpdateProducerUseCase>("UpdateProducerUseCase", UpdateProducerUseCase);

//Repositories
container.registerSingleton<ProducerRespository>("ProducerRespository", ProducerRespository);