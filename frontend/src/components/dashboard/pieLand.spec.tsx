import { render, screen, waitFor } from '@testing-library/react';
import PieLand from './pieLand';
import '@testing-library/jest-dom/extend-expect';
import server from "./mocks/server";
import { rest } from 'msw';
import { URL_BACKEND } from '../../configs/constants';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PieLand', () => {

  test('renders a loading message when loading is true', async () => {

    render(<PieLand />);

    const element = await screen.getByRole("loading");
    expect(element).toBeInTheDocument();
  });

  test('renders the chart component when dataPie has data',  async () => {

    const { getByText } = render(<PieLand />);
  
    expect(getByText('Carregando')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole("chart")).toBeInTheDocument());
  });

  test('renders the chart component when dataPie no data',  async () => {

    server.use(
      rest.get(`${URL_BACKEND}/api/graphics/totais/land`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );

    const { getByText } = render(<PieLand />);
  
    expect(getByText('Carregando')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole("notFound")).toBeInTheDocument());
  });
  
});