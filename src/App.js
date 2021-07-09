import React, { Component } from "react";
import "./App.css";
import Panel from "./components/Panel";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter";
import SignUpForm from "./components/SignUpForm";
import ArticleList from "./components/ArticleList/ArticleList";
import Modal from "./components/Modal/Modal";

import shortid from "shortid";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

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
    showModal: false,
  };
  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));

    this.setState({ todos });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  //*открыть <=> закрыть
  isOpenChange = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
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
    const { todos, onChangeFilter, filter, isOpen, agreed, showModal } =
      this.state;
    const visibleTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        {/* Modal */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoAdd addNewTodo={this.addNewTodo} onClick={this.toggleModal} />
            <button type="button" onClick={this.toggleModal}>
              X
            </button>
          </Modal>
        )}
        <div className="App">
          {/* form */}
          {isOpen && (
            <SignUpForm
              onSubmit={this.onSubmit}
              onClick={this.isOpenChange}
              isOpen={isOpen}
              agreed={agreed}
            />
          )}

          <button type="button" onClick={this.isOpenChange}>
            Registration
          </button>
          <header className="App-header" />
          {/* <Panel title="User profile">
            <Profile user={user} />
            <Counter step={1} />
          </Panel> */}
          <Filter value={filter} onChangeFilter={this.onChangeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
      </>
    );
  }
}

export default App;
