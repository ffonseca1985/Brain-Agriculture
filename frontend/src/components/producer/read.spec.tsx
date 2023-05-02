import { render, screen } from '@testing-library/react';
import ReadTable from './read';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({

  useDispatch: () => mockedDispatch,
  useSelector: (fn: any) => fn({
    producer: {
      itens: [{
        id: '1',
        tipo: 1,
        nomeProdutor: 'John Doe',
        nomeFazenda: 'Doe Farms',
        cidade: 'New York',
        estado: 'NY',
        areaTotalAgricultavel: 10,
        areaTotalVegetacao: 20,
        culturas: [1, 2],
      }],
      itemModify: null,
      loading: false,
    },
  }),
}));

describe('ReadTable', () => {
  it('should render the table', () => {
    render(<ReadTable />);
    expect(screen.getByText('Produtores Cadastrados')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Doe Farms')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('NY')).toBeInTheDocument();
  });
});
