import { Request, Response } from "express";
import { producerDto } from "./dtos/producerDto";

export default class ProducerController {

  async post(request: Request, response: Response) {

    const { tipo, nomeProdutor, nomeFazenda, cidade, estado, areaTotalAgricultavel, areaTotalVegetacao, culturas } : producerDto = request.body;

    


    response.status(201)
      .json();

  }
}