import { createAction, props } from '@ngrx/store';

export const incrementCounter = createAction(
  '[Counter] Increment',
  props<{ increment: number }>()
);

export const decrementCounter = createAction(
  '[Counter] Decrement',
  props<{ decrement: number }>()
);

export const resetCounter = createAction('[Counter] Reset');
