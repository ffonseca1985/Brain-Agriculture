import { useState } from "react"
import { useSelector } from "react-redux";
import { Producer } from "../components/producer/services/types";

const useProducer = <T extends Producer | null>(t: T) => {

    const producerUpdating = useSelector((state: any) => {

        const result: Producer = state.producer.itemModify;
        return result;
    });

    return [producerUpdating];
}

export default useProducer;