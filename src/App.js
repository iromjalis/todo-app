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
import { BulletList } from "react-content-loader";
import Searching from "./components/Searching/Searching";

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
    error: null,
    searching: "",
  };
  componentDidMount() {
    this.setState({ isLoading: true });

    const { searching } = this.state;
    // axios
    //   .get("https://hn.algolia.com/api/v1/search?query=react")
    //   .then((response) => {
    //     console.log("articles", response.data);

    //     this.setState({ articles: response.data.hits });
    //   })
    ArticlesApi.fetchArticlesWithQuery(this.state.searching)
      .then((articles) => this.setState({ articles }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searching !== this.state.searching) {
      console.log("changed");
      ArticlesApi.fetchArticlesWithQuery(this.state.searching)
        .then((articles) => this.setState({ articles }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
    if (prevState.state !== this.state) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  componentWillUpdate(nextProps, nextState) {}
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
      searching,
    } = this.state;
    const visible = todos.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <div className="App">
          API
          <Searching searching={searching} onSubmit={this.articlesSearching} />
          {error && <p>Whoops, something went wrong: {error}</p>}
          {isLoading && <BulletList />}
          {articles.length > 0 && <ArticleList articles={articles} />}
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
