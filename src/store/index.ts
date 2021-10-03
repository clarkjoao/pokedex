import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PokemonsReducer from './reducers/pokemons.reducer'

export const store = configureStore({
  reducer: {
    pokemons: PokemonsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
