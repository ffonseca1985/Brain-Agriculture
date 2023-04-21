import BrainAgricultureException from "../../exceptions/brainAgricultureException";

export class Area {

    constructor(total: number) {

        if (total <= 0) {
            throw new BrainAgricultureException(`total <= 0, value ${total}`);
        }

        this.total = total
    }

    readonly total: number;

    get convention(): string {

        if (this.total >= 2) {
            return "hectares"
        }

        return "hectar";
    }
}