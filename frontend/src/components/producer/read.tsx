import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Producer, getCultures, getType } from './services/types';
import { getAll } from './services';

const ReadTable : React.FC = () => {

  const [loading, setLoad] = useState<boolean>(false);
  const [producers, setProducer] = useState<Array<Producer>>([])

  useEffect(() => {

    (async () => {

      try {

        setLoad(true);

        const result: Array<Producer> = await getAll();
        setProducer(result);

      } catch (error) {
        alert('Erro ao carregar produtores')
      }
      finally {
        setLoad(false)
      }
    })();
  }, []);


  const handleDelete = (id: string) => {
    console.log(`Delete clicked for row with id: ${id}`);
  };

  const handleEdit = (id: string) => {

    console.log(`Edit clicked for row with id: ${id}`);
  };

  if (loading) {
    return <React.Fragment>"Carregando..."</React.Fragment>
  }

  return <React.Fragment>

    <h3 className='text-primary text-uppercase'>Produtores Cadastrados</h3>
    <div className="table-responsive">
      <Table striped bordered hover responsive>
        <thead>
          <Header />
        </thead>
        <tbody>
          {producers.map((prod, key) => <Body {...prod} key={key}/>)}
        </tbody>
      </Table>
    </div>
  </React.Fragment>
};

const Header = () => {

  return (
    <tr>
      <th> CPF/CNPJ</th>
      <th>Tipo</th>
      <th>Nome do produtor</th>
      <th>Nome da Fazenda</th>
      <th>Cidade</th>
      <th>Estado</th>
      <th>Area Total Agricultavel</th>
      <th>Area Total de Vegetação</th>
      <th>Culturas</th>
    </tr>
  )
}
const Body : React.FC<Producer> = (producer: Producer) => {

  return (<tr>
      <td>{producer.id}</td>
      <td>{getType(producer.tipo)}</td>
      <td>{producer.nomeProdutor}</td>
      <td>{producer.nomeFazenda}</td>
      <td>{producer.cidade}</td>
      <td>{producer.estado}</td>
      <td>{producer.areaTotalAgricultavel}</td>
      <td>{producer.areaTotalVegetacao}</td>
      <td>{getCultures(producer.culturas)}</td>
  </tr>)

}

export default ReadTable;