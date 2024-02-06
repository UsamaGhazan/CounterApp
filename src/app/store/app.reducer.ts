import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface AppState {
  counter: number;
}

const initialState: AppState = {
  counter: 0,
};

const appReducer = createReducer(
  initialState,
  on(AppActions.incrementCounter, (state, { increment = 1 }) => ({
    ...state,
    counter: state.counter + increment,
  })),

  on(AppActions.decrementCounter, (state, { decrement = 1 }) => ({
    ...state,
    counter: state.counter - decrement,
  })),
  on(AppActions.resetCounter, () => initialState)
);

export function reducer(state: AppState | undefined, action: any) {
  return appReducer(state, action);
}
