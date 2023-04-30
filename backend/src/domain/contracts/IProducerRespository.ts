import { IProducer } from "../entities/IProducer";


export default interface IProducerRespository {
    upsert: (producer: IProducer) => Promise<IProducer>;
    getAll: () => Promise<IProducer[]>;
    delete: (id: string) => Promise<boolean>;
    get: (id: string) => Promise<IProducer>;
    update: (producer: IProducer) => Promise<any>
}