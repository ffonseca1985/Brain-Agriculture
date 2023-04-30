import { isCPFValid } from "src/uteis/validations/cpf";
import { IProducer, ProducerType } from "./IProducer";
import { Farm } from "./farm";
import InvalidArgumentException from "../exceptions/invalidArgumentException";

export class PhysicalPerson implements IProducer {

    private _id: string;
    private _name: string;
    private _farm: Farm;
    private _type: ProducerType;
    
    constructor(cpf: string, name: string, type: ProducerType, farm: Farm) {

        const isValid = isCPFValid(cpf);

        if (!isValid) {
            throw new InvalidArgumentException(`invalid CPF: ${cpf}`)
        }

        this.id = cpf;
        this.name = name;
        this.farm = farm;
        this.type = type;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get type(): ProducerType {
        return this._type;
    }

    set type(type: ProducerType) {
        this._type = type;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get farm(): Farm {
        return this._farm;
    }

    set farm(farm: Farm) {
        this._farm = farm;
    }
}
