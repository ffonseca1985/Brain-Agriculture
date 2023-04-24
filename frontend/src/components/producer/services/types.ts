

export interface Producer {
    id: string,
    tipo: number,
    nomeProdutor: string,
    nomeFazenda: string,
    cidade: string,
    estado: string,
    areaTotalAgricultavel: number,
    areaTotalVegetacao: number,
    culturas?: Array<string>
}

export enum ProducerType {
    Phisical = 1,
    Legal = 2
}

export const getCultures = (cultures?: Array<string>) => {

    if (!cultures) return "";

    const joinedString = cultures.join(', ');
    return joinedString;
}

export const getType = (type: number) => {
    return ProducerType[type];
}