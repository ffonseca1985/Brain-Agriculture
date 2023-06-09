import { Request, Response } from "express";
import { container } from "tsyringe";
import InsertProducerUseCase from "src/useCase/producer/InsertProducer.useCase";
import { GetAllProducerUseCase } from "src/useCase/producer/getAllProducer.useCase";
import { DeleteProducerUseCase } from "src/useCase/producer/deleteProducer.useCase";
import UpdateProducerUseCase from "src/useCase/producer/updateProducer.useCase";
import { UpdateProducerDto } from "./dtos/updateProducerDto";
import { CreateProducerDto } from "./dtos/createProducerDto";

export default class ProducerController {

  async post(request: Request, response: Response) {

    try {

      const instanceUseCase = container.resolve(InsertProducerUseCase)
      const producer: CreateProducerDto = request.body;

      const result = await instanceUseCase.execute(producer);

      response.status(201)
        .json(result);

    } catch (error) {

      response.status(500)
        .json();
    }
  }

  async get(_: Request, response: Response) {

    const instanceUseCase = container.resolve(GetAllProducerUseCase)
    const result = await instanceUseCase.execute();

    response.status(200)
      .json(result);
  }

  async delete(request: Request, response: Response) {

    try {

      const instanceUseCase = container.resolve(DeleteProducerUseCase);
      const { id } = request.params;

      const result = await instanceUseCase.execute(id);

      result ? response.status(204) : response.status(400);
      response.send();

    } catch (error) {
      response.status(500).json();
    }
  }

  async put(request: Request, response: Response) {

    try {

      const instanceUseCase = container.resolve(UpdateProducerUseCase);
      const producer: UpdateProducerDto = request.body;

      await instanceUseCase.execute(producer);

      response.json(204).send();

    } catch (error) {
      response.status(500).json();
    }
  }
}