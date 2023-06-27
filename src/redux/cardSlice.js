import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await fetch(
    'https://financialmodelingprep.com/api/v3/stock/list?apikey=7d590f6da85f2280e76c80b6214c2bcb',
  );
  const data = await response.json();
  // Return only the first 100 objects from the data array
  return data.slice(0, 100);
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;
