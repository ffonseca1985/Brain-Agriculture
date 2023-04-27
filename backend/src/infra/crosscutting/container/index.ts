import { CultureRepository } from "src/infra/dataBase/mocks/cultureRepository";
import { StateRepository } from "src/infra/dataBase/mocks/stateRepository";
import { GraphicsTotaisQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totaisQuery";
import { GraphicsTotalLandUseQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totalLandUseQuery";
import { GraphicsTotalPerStateQuery } from "src/infra/dataBase/sequelize/graphics/graphics.totalPerStateQuery";
import { ProducerRespository } from "src/infra/dataBase/sequelize/producer/producerRespository";
import { GetAllStatesUseCase } from "src/useCase/getAllStates.useCase";
import { GetTotalsByLandUSeUseCase } from "src/useCase/graphics/GetTotalsByLandUSeUseCase";
import { GetTotalsByStateUseCase } from "src/useCase/graphics/GetTotalsByStateUseCase";
import { GetTotaisUseCase } from "src/useCase/graphics/getTotals.useCase";
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

container.registerSingleton<GetTotalsByStateUseCase>("GetTotalsByStateUseCase", GetTotalsByStateUseCase);
container.registerSingleton<GetTotaisUseCase>("GetTotaisUseCase", GetTotaisUseCase);
container.registerSingleton<GetTotalsByLandUSeUseCase>("GetTotalsByLandUSeUseCase", GetTotalsByLandUSeUseCase);

//Repositories
container.registerSingleton<ProducerRespository>("ProducerRespository", ProducerRespository);
container.registerSingleton<GraphicsTotaisQuery>("GraphicsTotaisQuery", GraphicsTotaisQuery);
container.registerSingleton<GraphicsTotalLandUseQuery>("GraphicsTotalLandUseQuery", GraphicsTotalLandUseQuery);
container.registerSingleton<GraphicsTotalPerStateQuery>("GraphicsTotalPerStateQuery", GraphicsTotalPerStateQuery);