import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import CardDetails from './cardDetails';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('CardDetails', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ pokemonName: 'pikachu' });
  });

  it('displays loading message when data is not yet fetched', () => {
    render(<CardDetails />);

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('displays pokemon details after data is fetched', async () => {
    const mockPokemon = {
      name: 'Pikachu',
      sprites: {
        front_default: 'pikachu.png',
      },
      types: [
        {
          type: {
            url: 'https://pokeapi.co/api/v2/type/13/',
          },
        },
      ],
    };

    const mockTypeDetails = {
      name: 'Electric',
      damage_relations: {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
      },
    };

    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        json: async () => mockPokemon,
      })
      .mockResolvedValueOnce({
        json: async () => mockTypeDetails,
      });

    render(<CardDetails />);

    // Wait for the data to be fetched and displayed
    await screen.findByText('Pikachu');
    await screen.findByAltText('Pikachu');
    await screen.findByText('Type: Electric');

    const pokemonName = screen.getByText('Pikachu');
    const pokemonImage = screen.getByAltText('Pikachu');
    const typeHeading = screen.getByText('Type: Electric');

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
    expect(typeHeading).toBeInTheDocument();
  });
});
