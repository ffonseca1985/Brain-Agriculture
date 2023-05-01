
export interface TotalPerState {
    total: number;
    state: string
}

export interface TotalLand {
    total: number;
    totalvegetable: number;
    totalagricutable: number
}

export interface Totals {
    totalFarm: number,
    totalHectare: number
}

export const parseDataPieState = (totals: Array<TotalPerState>) : Array<Array<string>>=> {

    let graphic: Array<Array<any>> = [];
    graphic.push(["Estados", "Totais"]);

    totals.map(x => {

        let total = parseFloat(x.total.toString())
        const data : Array<any> = [x.state, total];

        graphic.push(data);

        return data;
    })

    return graphic;
}

export const parseDataPieLand = (totals: TotalLand) : Array<Array<string>> =>  {

    let graphic: Array<Array<any>> = [];
    
    graphic.push(["Estados", "Solo"]);
    graphic.push(["agricultavel", parseFloat(totals.totalagricutable.toString())])
    graphic.push(["Floresta", parseFloat(totals.totalvegetable.toString())])

    return graphic;
}