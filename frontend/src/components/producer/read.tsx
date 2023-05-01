import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Producer, getCultures, getType } from './services/types';
import { deleteById } from './services/producer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, updatingItem } from "../../store/producer/produceSlice"

const ReadTable: React.FC = () => {

  const [producers, setProducer] = useState<Array<Producer>>([]);
  const dispatch = useDispatch()

  const state =  useSelector((x: any) => x.producer);

  useEffect(() => 
  {
    setProducer(state.itens);
  }, [state.itens]);


  const handleDelete = async (id: string) => {

    await deleteById(id);
    dispatch(deleteItem(id))

    alert("Deletado com sucesso");
  };

  const handleEdit = (id: string) => {
    
    const producer = producers.find(x => x.id === id);
    dispatch(updatingItem(producer));
  };

  if (state.loading) {
    return <React.Fragment>Carregando...</React.Fragment>
  }

  if (!producers || producers.length === 0) {
    return <React.Fragment>[Sem itens Cadastrados]</React.Fragment>
  }

  const Header = () => {

    return (
      <tr>
        <th>CPF/CNPJ</th>
        <th>Tipo</th>
        <th>Nome do produtor</th>
        <th>Nome da Fazenda</th>
        <th>Cidade</th>
        <th>Estado</th>
        <th>Area Total Agricultavel</th>
        <th>Area Total de Vegetação</th>
        <th>Culturas</th>
        <th></th>
      </tr>
    )
  }
  const Body: React.FC<Producer> = (producer: Producer) => {

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
      <td>
        <Button className='btn btn-link btn-primary' onClick={() => handleEdit(producer.id)}>Edit</Button>
        <Button className='btn btn-link text-danger btn-danger' onClick={() => handleDelete(producer.id)}>Delete</Button>
      </td>
    </tr>)
  }

  return <React.Fragment>

    <h3 className='text-primary text-uppercase'>Produtores Cadastrados</h3>
    <div className="table-responsive">
      <Table striped bordered hover responsive>
        <thead>
          <Header />
        </thead>
        <tbody>
          {producers.map((prod, key) => <Body {...prod} key={key} />)}
        </tbody>
      </Table>
    </div>
  </React.Fragment>
};

export default ReadTable;