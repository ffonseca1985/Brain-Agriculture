import { useEffect, useState } from "react";
import { getTotalByLand } from "./services";
import { parseDataPieLand } from "./services/types";
import Chart from "react-google-charts";

const PieLand: React.FC = () => {

    const [dataPie, setSataPie] = useState<Array<any> | null>();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        setLoading(true);

        (async () => {

            try {

                const totalByState = await getTotalByLand();
                
                if (totalByState) {
                    const result = parseDataPieLand(totalByState);
                    setSataPie(result);
                }
                
            } catch (error) {
                alert("Erro ao carregar gráficos de area")
            }
            finally {
                setLoading(false);
            }
        })()
    }, [])


    const options = {
        title: 'Estados',
        pieHole: 0.4,
        is3D: true,
    };

    if(loading) {
        return <div className='text-center'>Carregando</div>
    }
    if (!dataPie) {
        return <div className='text-center'>Nenhum dado encontrado para o grafico de estados</div>
    }

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={dataPie}
                options={options}
                width="100%"
                height="400px"
            />
        </div>
    );
};

export default PieLand;