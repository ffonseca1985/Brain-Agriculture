

export interface producerDto {
    id: string,
    tipo : number,
    nomeProdutor: string,
    nomeFazenda: string,
    cidade: string,
    estado: string,
    areaTotalAgricultavel: number,
    areaTotalVegetacao: number,
    culturas: Array<string>
}