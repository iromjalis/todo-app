//styles
import { Component } from 'react';
import './App.css';
import shortid from 'shortid';

//components
import Container from './components/Container/Container.js';
// import Form from './components/Form';
import TodoList from './components/TodoList';
import Editor from './components/Editor/Editor';
import Filter from './components/Filter/Filter';
//data
const todos = [
  { id: 'id-1', text: 'Выучить основы React', completed: true },
  { id: 'id-2', text: 'Разобраться с React Router', completed: false },
  { id: 'id-3', text: 'Пережить Redux', completed: false },
];

class App extends Component {
  state = {
    todos: todos,
    filter: '',
  };
  addTodo = text => {
    console.log('text:', text);

    const todo = {
      id: shortid.generate(),
      text,
      complited: false,
    };
    console.log('todo', todo);

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  handleDelete = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log('data', data);
    const { name, number } = data;
    this.setState({ name, number });
    console.log(this.state);
  };

  handleChange = ({ currentTarget }) => {
    console.log(currentTarget.value);

    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
  };

  completed = this.state.todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0,
  );

  onToggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const normalized = this.state.filter.toLowerCase();
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalized),
    );
  };

  calculateComplitedTodos = () => {
    return this.state.todos.filter(todo => todo.completed).length;
  };

  render() {
    const { todos } = this.state;
    const totalTodos = todos.length;
    const done = this.state.todos.filter(todo => todo.completed).length;

    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <>
        <Container>
          <h1>Всего: {totalTodos}</h1>
          <h2>Сделано: {done} </h2>
          {/* <Form onSubmit={this.formSubmitHandler} /> */}
          <Editor onSubmit={this.addTodo} />
          <Filter
            value={this.state.filter}
            onChange={this.handleChangeFilter}
          />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.handleDelete}
            onToggleCompleted={this.onToggleCompleted}
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
