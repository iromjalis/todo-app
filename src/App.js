import React, { Component } from "react";
import "./App.css";
import Panel from "./components/Panel";
// import Counter from "./components/Counter";
// import Profile from "./components/Profile";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter";
import SignUpForm from "./components/SignUpForm";

import shortid from "shortid";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Выучить основы React", completed: true },
      { id: "id-2", text: "Разобраться с React Router", completed: false },
      { id: "id-3", text: "Пережить Redux", completed: false },
    ],
    filter: "",
    value: "",
    isOpen: false,
    agreed: false,
    gender: null,
  };

  //*открыть <=> закрыть
  isOpenChange = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  onChangeFilter = (e) => {
    console.log("value", e.target.value);

    this.setState({ filter: e.currentTarget.value });
  };
  onSubmit = (state) => {
    this.setState((prevState) => ({ ...state }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  loginInputId = shortid.generate();

  addNewTodo = ({ text }) => {
    const todo = {
      id: shortid.generate(),
      text,
      complited: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };
  render() {
    const { todos, onChangeFilter, filter, isOpen, agreed } = this.state;
    const visibleTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="App">
        {isOpen ? (
          <SignUpForm
            onSubmit={this.onSubmit}
            onClick={this.isOpenChange}
            isOpen={isOpen}
            agreed={agreed}
          />
        ) : (
          <button type="button" onClick={this.isOpenChange}>
            Registration
          </button>
        )}

        <header className="App-header" />
        {/* <Panel title="User profile"> 
          <Profile user={user} />
          <Counter step={1} />
        </Panel>*/}

        <TodoAdd addNewTodo={this.addNewTodo} />
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
