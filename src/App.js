import React, { Component } from "react";
import "./App.css";
import Panel from "./components/Panel";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter";
import SignUpForm from "./components/SignUpForm";
import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import Modal from "./components/Modal/Modal";
import ArticleList from "./components/ArticleList/ArticleList";

import ContentLoader, { BulletList } from "react-content-loader";

import axios from "axios";
import shortid from "shortid";

class App extends Component {
  state = {
    articles: [],
    todos: [
      { id: "id-1", text: "Выучить основы React", completed: true },
      { id: "id-2", text: "Разобраться с React Router", completed: false },
      { id: "id-3", text: "Пережить Redux", completed: false },
    ],
    filter: "",
    showModal: false,
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((response) => {
        console.log("articles", response.data);

        this.setState({ articles: response.data.hits, isLoading: false });
      });

    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.state !== this.state) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  onChange = (e) => {
    console.log("filter", e.target.value);

    this.setState({ filter: e.target.value });
  };

  handleSubmit = (data) => {
    console.log("data", data);

    this.setState({ ...data });
  };

  addNewTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    // console.log("todo", todo);
    const { todos } = this.state;
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
    this.toggleModal();
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

  render() {
    const { todos, onChange, filter, showModal, agreed, articles, isLoading } =
      this.state;
    const visible = todos.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <div className="App">
          API
          {isLoading ? <BulletList /> : <ArticleList articles={articles} />}
        </div>
        <div className="App">
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <button onClick={this.toggleModal}>X</button>
              {/* <SignUpForm
              onSubmit={this.handleSubmit}
              onClose={this.toggleModal}
            /> */}
              <AddNewTodo onSubmit={this.addNewTodo} />
            </Modal>
          )}
          <button className="button" onClick={this.toggleModal}>
            {showModal ? "Close modal" : "Add new todo"}
          </button>

          <header className="App-header" />
          <Filter filter={this.state.filter} onChange={this.onChange} />
          <TodoList
            todos={visible}
            onDeleteTodo={this.deleteTodo}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
      </>
    );
  }
}

export default App;
