import React, { Component } from "react";
import "./App.css";
// import Panel from "./components/Panel";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter";
import SignUpForm from "./components/SignUpForm";
import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import Modal from "./components/Modal/Modal";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticlesApi from "./services/ArticlesApi";
import TodoApi from "./services/TodoApi";
import { BulletList } from "react-content-loader";
import Searching from "./components/Searching/Searching";

import axios from "axios";
import shortid from "shortid";

class App extends Component {
  state = {
    articles: [],
    todos: [
      {
        id: "id-2",
        text: "Разобраться с React Router",
        completed: true,
      },
      {
        id: "id-3",
        text: "Пережить Redux",
        completed: false,
      },
      {
        id: "LAsQIyg_x",
        text: "Выучить основы React",
        completed: false,
      },
    ],
    filter: "",
    showModal: false,
    isLoading: false,
    error: null,
    searching: "",
  };
  componentDidMount() {
    this.setState({ isLoading: true });

    const { searching } = this.state;

    ArticlesApi.fetchArticlesWithQuery(this.state.searching)
      .then((articles) => this.setState({ articles }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    if (localStorage.getItem("todos")) {
      this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
    }
    if (localStorage.getItem("login")) {
      this.setState({ login: localStorage.getItem("login") });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
    if (prevState.searching !== this.state.searching) {
      ArticlesApi.fetchArticlesWithQuery(this.state.searching)
        .then((articles) => this.setState({ articles }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  onChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = (data) => {
    console.log("data", data);

    this.setState({ ...data });
  };

  addNewTodo = (text) => {
    if (this.state.todos.map((todo) => todo.text).includes(text.trim())) {
      alert("already exists");
      return;
    }
    const todoData = {
      id: shortid.generate(),
      text: text.trim(),
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todoData, ...todos] }));
  };

  toggleCompleted = (id) => {
    this.setState((state) => {
      const todos = this.toggleProperty(state, id, "completed");
      return {
        todos,
      };
    });
  };

  toggleProperty(state, id, propName) {
    const todos = state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          [propName]: !todo[propName],
        };
      }

      return todo;
    });

    return todos;
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  articlesSearching = (text) => {
    this.setState({ searching: text });
  };

  render() {
    const {
      todos,
      onChange,
      filter,
      showModal,
      agreed,
      articles,
      isLoading,
      error,
      login,
      searching,
    } = this.state;
    const visible = todos.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        {/* <div className="App">
          API
          <Searching searching={searching} onSubmit={this.articlesSearching} />
          {error && <p>Whoops, something went wrong: {error}</p>}
          {isLoading && <BulletList />}
          {articles.length > 0 && <ArticleList articles={articles} />} 
        </div> */}
        <div className="App">
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <button onClick={this.toggleModal}>X</button>
              <SignUpForm
                onSubmit={this.handleSubmit}
                onClose={this.toggleModal}
              />
            </Modal>
          )}

          {!login && (
            <button className="button" onClick={this.toggleModal}>
              {!showModal ? "Open registration form" : ""}
            </button>
          )}
          <h1>{login ? `Welcome, ${login}` : ""}</h1>

          <AddNewTodo onSubmit={this.addNewTodo} />

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
