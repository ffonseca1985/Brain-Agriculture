import { Request, Response } from "express";

export default class ProductController {

    async post(request: Request, response: Response) {

          response.status(201)
            .json();
              
    }
}