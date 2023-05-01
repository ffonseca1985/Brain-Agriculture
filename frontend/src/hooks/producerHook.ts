import { useState } from "react"
import { useSelector } from "react-redux";
import { Producer } from "../components/producer/services/types";

const useProducer = <T extends Producer | null>(t: T) => {

    const [producerUpdating, setProducerUpdating] = useState<any>();

    useSelector((state: any) => {

        const result: Producer = state.producer.itens.find((x: any) => x.updatingItem);

        if (result) {
            setProducerUpdating(producerUpdating)
        }
    });

    return [producerUpdating];
}

export default useProducer;