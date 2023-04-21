
import { isCNPJValid } from "src/uteis/cnpj";
import { IProdutor } from "./IProdutor";
import { Farm } from "./farm";
import InvalidArgumentException from "@domain/exceptions/invalidArgumentException";

export class LegalPerson implements IProdutor {

    private _id: string;
    private _name: string;
    private _farms: Farm[];

    constructor(cnpj: string, name: string, farms: Farm[]) {

        const isValid = isCNPJValid(cnpj);

        if (!isValid) {
            throw new InvalidArgumentException(`invalid CNPJ: ${cnpj}`)
        }

        this._id = cnpj;
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