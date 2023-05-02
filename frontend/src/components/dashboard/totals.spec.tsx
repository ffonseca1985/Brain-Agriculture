import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import server from "./mocks/server";
import { TableTotals } from './totals';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Totals', () => {

  test('renders a loading message when loading is true', async () => {

    render(<TableTotals />);

    const element = await screen.getByRole("loading");
    expect(element).toBeInTheDocument();
  });

  test('renders the chart component when total has data',  async () => {

    const { getByText } = render(<TableTotals />);
  
    expect(getByText('Carregando')).toBeInTheDocument();

    await waitFor(() => {
      const table  = screen.getAllByRole("table");
      expect(table).toBeDefined()
    });
  });  
});