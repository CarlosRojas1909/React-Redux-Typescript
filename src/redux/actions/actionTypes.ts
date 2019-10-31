import { fetchTodos, deleteTodo } from "../actions";

// this is equal to fetch= "FETCH_TODOS"
//in actions we don't care about pasing a string. we care that action has a unique value
//using enum  fetchTodos get assigned a value of zero

export enum ActionTypes {
  fetchTodosType,
  deleteTodoType
}

//Ceating types for Actions
export type Action = fetchTodos | deleteTodo;
