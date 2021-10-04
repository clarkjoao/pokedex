import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import  {IPokemon } from 'types/pokemon'
interface IResults{
    id: string;
    name: string;
    url: string;
}
interface PokemonsState {
    count: number
    next: string | null;
    previous: string | null;
    results: IResults[]
    pokemonsDetails: IPokemon[]
}

const initialState: PokemonsState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    pokemonsDetails: []
}

export const pokemonsReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    fetchList: (state, action: PayloadAction<PokemonsState>) => {
      state = {...action.payload, results:[...state.results, ...action.payload.results]}
      console.log("dispatch", state)
      return state
    },
  },
})

export const { fetchList } = pokemonsReducer.actions

export const selectPokemons = (state: RootState) => state.pokemons

export default pokemonsReducer.reducer