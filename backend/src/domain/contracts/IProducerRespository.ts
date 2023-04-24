import { IProducer } from "../entities/IProducer";


export default interface IProducerRespository {
    save: (producer: IProducer) => Promise<IProducer>
}