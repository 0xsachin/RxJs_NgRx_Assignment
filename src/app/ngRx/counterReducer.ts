import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log("increment called");
    return state + 1;
  }),
  on(decrement, (state) => {
        console.log("decrement called");
    return state - 1;
  })
);