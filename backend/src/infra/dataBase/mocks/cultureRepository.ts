import { injectable } from "tsyringe";

@injectable()
export class CultureRepository {

    getAll(): Array<string> {

        const cultures: Array<string> = ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"];
        return cultures;
    }
}