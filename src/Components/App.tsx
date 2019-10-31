import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../redux/reducers/combineReducer";
import { Todo, fetchTodosAction, deleteTodoAction } from "../redux/actions";

interface AppProps {
  todos: Todo[];
  fetchTodosAction: typeof fetchTodosAction;
  deleteTodoAction: typeof deleteTodoAction;
}

interface AppState {
  fetching: boolean;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetching: false
    };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onFetching = (): void => {
    this.props.fetchTodosAction();
    this.setState({ fetching: true });
  };

  onDelete = (id: number): void => {
    this.props.deleteTodoAction(id);
  };

  showList = (): JSX.Element[] => {
    return this.props.todos.map(todo => {
      return (
        //Adding an onClick to every single "todo"
        <div onClick={() => this.onDelete(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  render() {
    console.log("state here", this.props.todos);
    return (
      <div>
        <button onClick={this.onFetching}>Fetch Data</button>
        {this.state.fetching ? "Loading" : null}
        {this.showList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos
});

const mapDispatchToProps = () => ({
  fetchTodosAction,
  deleteTodoAction
});
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App);
