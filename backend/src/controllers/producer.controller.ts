import { Request, Response } from "express";
import { ProducerDto } from "./dtos/producerDto";
import { container } from "tsyringe";
import InsertProducerUseCase from "src/useCase/producer/InsertProducer.useCase";

export default class ProducerController {

  async post(request: Request, response: Response) {

    const instanceUseCase = container.resolve(InsertProducerUseCase)
    const producer: ProducerDto = request.body;

    const result = await instanceUseCase.execute(producer);

    response.status(201)
      .json(result);
  }
}