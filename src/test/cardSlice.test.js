import { selectCards, selectLoading, selectError } from '../redux/cardSlice';

describe('cardSlice selectors', () => {
  const initialState = {
    cards: ['Card 1', 'Card 2', 'Card 3'],
    loading: true,
    error: 'Error fetching cards',
  };

  it('should return the selected cards', () => {
    const selectedCards = selectCards({ cards: initialState });
    expect(selectedCards).toEqual(['Card 1', 'Card 2', 'Card 3']);
  });

  it('should return the loading state', () => {
    const loadingState = selectLoading({ cards: initialState });
    expect(loadingState).toBe(true);
  });

  it('should return the error state', () => {
    const errorState = selectError({ cards: initialState });
    expect(errorState).toBe('Error fetching cards');
  });
});
