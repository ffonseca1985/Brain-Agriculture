import { Request, Response } from "express";

export default class ProducerController {

    async post(request: Request, response: Response) {

          response.status(201)
            .json();
              
    }
}