import { Address } from "../address";
import { Area } from "./area";

export class Farm {

    private _name: string;
    private _address: Address;
    private _cultures: string[];
    private _totalArable: Area;
    private _totalVegetated: Area;

    private _errors: string[] = []

    constructor(name: string, address: Address, cultures: string[], totalArable: Area, totalVegetated: Area) {
        
        this._name = name;
        this._address = address;
        this._cultures = cultures;
        this._totalArable = totalArable;
        this._totalVegetated = totalVegetated;
    }

    get name(): string {
        return this._name;
    }

    private set name(value: string) {
        this._name = value;
    }

    get address(): Address {
        return this._address;
    }

    private set address(value: Address) {
        this._address = value;
    }

    get cultures(): string[] {
        return this._cultures;
    }

    private set cultures(value: string[]) {
        this._cultures = value;
    }

    get totalArable(): Area {
        return this._totalArable;
    }

    private set totalArable(value: Area) {
        this._totalArable = value;
    }

    get totalVegetated(): Area {
        return this._totalVegetated;
    }

    private set totalVegetated(value: Area) {
        this._totalVegetated = value;
    }

    get total(): Area {
        return new Area(this.totalArable.total + this.totalVegetated.total);
    }

    isValid = () => this._errors?.length == 0
}