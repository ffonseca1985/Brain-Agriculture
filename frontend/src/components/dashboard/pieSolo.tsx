import React from 'react';
import Chart from 'react-google-charts';

const PieSolo = () => {

    // Dados do gráfico
    const data = [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
    ];

    // Opções do gráfico
    const options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
        is3D: true,
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width="100%"
                height="400px"
            />
        </div>
    );
};

export default PieSolo;