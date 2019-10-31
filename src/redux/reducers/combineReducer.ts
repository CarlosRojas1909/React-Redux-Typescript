import { combineReducers } from "redux";
import { fetchTodosReducer } from "./fetchTodoReducer";
import { Todo } from "../actions/fetchTodosAction";

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: fetchTodosReducer
});
