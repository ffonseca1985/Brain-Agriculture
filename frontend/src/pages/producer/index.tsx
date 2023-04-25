
import React, { useEffect} from "react"
import Create from "../../components/producer/create"
import ReadTable from "../../components/producer/read"
import { Producer } from '../../components/producer/services/types';
import { getAll } from "../../components/producer/services/producer";
import { useDispatch } from "react-redux";
import {setLoading, loadItens } from "../../store/producer/produceSlice";

const ProducerPage: React.FC<any> = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        (async () => {

            try {

                dispatch(setLoading(true));
                const result: Array<Producer> = await getAll();
                dispatch(loadItens(result));

            } catch (error) {
                alert('Erro ao carregar produtores');
            }
            finally {
                dispatch(setLoading(false));
            }
        })();

    }, [dispatch]);

    return (
        <React.Fragment>
            <Create />
            <div className="mt-5">
                <ReadTable />
            </div>
        </React.Fragment>
    );
}

export default ProducerPage