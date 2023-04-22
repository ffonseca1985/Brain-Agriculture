import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ReadTable = () => {
  
    const handleDelete = (id : string) => { 
    console.log(`Delete clicked for row with id: ${id}`);
  };

  const handleEdit = (id :  string) => {
    
    console.log(`Edit clicked for row with id: ${id}`);
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome do produtor</th>
            <th>Nome da Fazenda</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Produtor 1</td>
            <td>Fazenda 1</td>
            <td>Cidade 1</td>
            <td>Estado 1</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete("1")}>
                Delete
              </Button>{' '}
              <Button variant="info" onClick={() => handleEdit("1")}>
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>Produtor 2</td>
            <td>Fazenda 2</td>
            <td>Cidade 2</td>
            <td>Estado 2</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete("2")}>
                Delete
              </Button>{' '}
              <Button variant="info" onClick={() => handleEdit("2")}>
                Edit
              </Button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default ReadTable;