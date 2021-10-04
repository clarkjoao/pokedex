import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

interface Pokemon{
    id: string;
    name: string;
    url: string;
}
interface PokemonsState {
    count: number
    next: string | null;
    previous: string | null;
    pokemons: Pokemon[],
}

const initialState: PokemonsState = {
    count: 0,
    next: null,
    previous: null,
    pokemons: []
}

export const pokemonsReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<PokemonsState>) => {
      return state = {...action.payload, pokemons:[...state.pokemons, ...action.payload.pokemons]}
    },
  },
})

export const { increment } = pokemonsReducer.actions

export const selectPokemons = (state: RootState) => state.pokemons

export default pokemonsReducer.reducer