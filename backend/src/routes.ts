import { Router } from "express";
import ProductController from "./apresentation/products.controller";

export const routes = (router: Router) => {

    router.post("/", new ProductController().post);
}