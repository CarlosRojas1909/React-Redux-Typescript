import { Todo, ActionTypes, Action } from "../actions";

export const fetchTodosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodosType:
      return action.payload;
    case ActionTypes.deleteTodoType:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
