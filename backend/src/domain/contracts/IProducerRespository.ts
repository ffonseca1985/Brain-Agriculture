import { IProducer } from "../entities/IProducer";


export default interface IProducerRespository {
    save: (producer: IProducer) => Promise<IProducer>;
    getAll: () => Promise<IProducer[]>;
    delete: (id: string) => Promise<boolean>;
    update: (producer: IProducer) => Promise<any>
}