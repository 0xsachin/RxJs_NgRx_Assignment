


import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counterReducer';
import { studentReducer } from './studentReducer';
// import { AppState } from './app.state';

export const mainReducer: ActionReducerMap<any> = {   // combine reducers here
  counter: counterReducer,
  students: studentReducer,
  // ... other reducers
};