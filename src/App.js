//styles
import { Component } from 'react';
import './App.css';

//components
import Container from './components/Container/Container.js';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

//data
const todos = [
  { id: 'id-1', text: 'Выучить основы React', completed: true },
  { id: 'id-2', text: 'Разобраться с React Router', completed: false },
  { id: 'id-3', text: 'Пережить Redux', completed: false },
];

class App extends Component {
  state = {
    todos: todos,
  };

  handleDelete = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleChange = e => {
    console.log('handleChange');
    const { checked } = e.target;
    const { completed } = this.state.todos;
    console.log(e.currentTarget.checked);
    this.setState({ completed: checked });
    console.log(this.state);
  };
  render() {
    const completed = this.state.todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    const { todos } = this.state;

    return (
      <>
        <Container>
          {/* <Todo todos={todos} /> */}
          <h1>Всего: {todos.length}</h1>
          <h2>Сделано: {completed} </h2>
          <TodoList
            todos={todos}
            onDeleteTodo={this.handleDelete}
            onChange={this.handleChange}
          />
        </Container>

        {/* <div className="App">
          <h1>next App component</h1>
        </div> */}
      </>
    );
  }
}

export default App;
