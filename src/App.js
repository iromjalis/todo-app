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
import Tabs from "./components/Tabs/Tabs";
import IconBtn from "./components/IconBtn/IconBtn";

import { ReactComponent as AddIcon } from "./icons/Add.svg";

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
    tabs: [
      {
        label: "Tab 1",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      },
      {
        label: "Tab 2",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      },
      {
        label: "Tab 3",
        content:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      },
    ],
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
    const { todos, tabs, onChangeFilter, filter, isOpen, agreed, showModal } =
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
              Close
            </button>
          </Modal>
        )}
        <div className="App">
          {/* form */}
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
          </Panel> */}
          {/* <Filter value={filter} onChangeFilter={this.onChangeFilter} /> */}
          <IconBtn onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="20" height="20" fill="#fff" />
          </IconBtn>
          <h3>Click to add NEW todo</h3>
          <Tabs tabs={todos} toggleCompleted={this.toggleCompleted} />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
      </>
    );
  }
}

export default App;
