import { Action } from '@ngrx/store';
// import * as UserActions from './act.action';
// import { UserModel } from './user.model';
const InitialState: any = {
  // studNo: '',
  // studName: '',
};

export function studentReducer(
  state: any[] = [InitialState],
  action: any
) {
  // console.log(state)
  switch (action.type) {
    case 'ADD_STUDENT':
        console.log("ADD_STUDENT called", action);
      return [...state, action.payload];

    // case UserActions.DeleteUserConst:
    //   return 'xxx'
    default:
      return state;
  }
}