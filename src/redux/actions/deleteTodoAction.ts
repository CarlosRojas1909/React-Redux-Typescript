import { ActionTypes } from "../actions/actionTypes";

export interface deleteTodo {
  type: ActionTypes.deleteTodoType;
  payload: number;
}

export const deleteTodoAction = (id: number): deleteTodo => ({
  type: ActionTypes.deleteTodoType,
  payload: id
});
