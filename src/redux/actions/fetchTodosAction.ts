import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes";

const url = "https://jsonplaceholder.typicode.com/todos";

// interface
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//this interface is optional for dispatch function, but recommended to make it easy when we are fetching many acions with diferent dispatches
export interface fetchTodos {
  type: ActionTypes.fetchTodosType;
  payload: Todo[];
}

export const fetchTodosAction = (): Function => {
  return async (dispatch: Dispatch) => {
    const fetchData = await fetch(url);
    const response: Todo[] = await fetchData.json();

    dispatch<fetchTodos>({
      type: ActionTypes.fetchTodosType,
      payload: response
    });
  };
};
