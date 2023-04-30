
import { isCNPJValid } from "src/uteis/validations/cnpj";
import { IProducer, ProducerType } from "./IProducer";
import InvalidArgumentException from "../exceptions/invalidArgumentException";
import { Farm } from "./farm";


export class LegalPerson implements IProducer {

    private _id: string;
    private _name: string;
    private _farm: Farm;
    private _type: ProducerType;

    constructor(cnpj: string, name: string, type: ProducerType, farm: Farm) {

        const isValid = isCNPJValid(cnpj);

        if (!isValid) {
            throw new InvalidArgumentException(`invalid CNPJ: ${cnpj}`)
        }

        this._id = cnpj;
        this._name = name;
        this._farm = farm;
        this._type = type;
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
