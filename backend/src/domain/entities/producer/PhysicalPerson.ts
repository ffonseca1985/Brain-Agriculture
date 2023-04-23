import { isCPFValid } from "src/uteis/cpf";
import { IProducer } from "./IProducer";
import { Farm } from "./farm";
import InvalidArgumentException from "@domain/exceptions/invalidArgumentException";

export class Produtor implements IProducer {

    private _id: string;
    private _name: string;
    private _farms: Farm[];

    constructor(cpf: string, name: string, farms: Farm[]) {

        const isValid = isCPFValid(cpf);

        if (!isValid) {
            throw new InvalidArgumentException(`invalid CPF: ${cpf}`)
        }

        this._id = cpf;
        this._name = name;
        this._farms = farms;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get farms(): Farm[] {
        return this._farms;
    }

    set farms(farms: Farm[]) {
        this._farms = farms;
    }
}
