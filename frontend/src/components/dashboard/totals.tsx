import { useEffect, useState } from "react"
import { getTotais } from "./services"

import { Totals } from "./services/types";

export const TableTotals: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [total, setTotal] = useState<Totals>();

    useEffect(() => {

        setLoading(true);

        (async () => {

            try {
                const totais = await getTotais();
                setTotal(totais)
            }
            catch (error) {
                alert('Erro ao carregar tabela totais')
            }
            finally {
                setLoading(false);
            }

        })()

    }, [])

    if (loading) {
        return <div className="text-center text-primary" >Carregando</div>
    }

    if (!total)
        return <div className="text-center text-primary">Nenhum Item encontrado...</div>

    return (<div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Total de Fazendas</th>
                    <th>Total (Hectares)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{total?.totalFarm}</td>
                    <td>{total?.totalHectare}</td>
                </tr>
               
            </tbody>
        </table>
    </div>)
}