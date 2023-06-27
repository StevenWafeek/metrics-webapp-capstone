import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardSlice';

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
