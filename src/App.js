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
    todos: [],
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

    // axios
    //   .get("http://localhost:3000/todos/")
    //   .then(({ data }) => this.setState({ todos: data }))
    TodoApi.fetchTodos()
      .then((todos) => this.setState({ todos }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searching !== this.state.searching) {
      ArticlesApi.fetchArticlesWithQuery(this.state.searching)
        .then((articles) => this.setState({ articles }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  deleteTodo = (todoId) => {
    // axios.delete(`http://localhost:3000/todos/${todoId}`)
    TodoApi.deleteTodo(todoId).then(() => {
      this.setState((prevState) => ({
        todos: prevState.todos.filter((todo) => todo.id !== todoId),
      }));
    });
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
    const todoData = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    // axios
    //   .post("http://localhost:3000/todos/", todo)
    TodoApi.addTodo(todoData)
      .then((todo) => {
        this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    this.toggleModal();
  };

  toggleCompleted = (todoId) => {
    const todo = this.state.todos.find(({ id }) => id === todoId);

    const { completed } = todo;

    // axios
    //   .patch(`http://localhost:3000/todos/${todoId}`, { completed: !completed })
    TodoApi.updateTodo(todoId, { completed: !completed }).then(
      (updatedTodo) => {
        this.setState(({ todos }) => ({
          todos: todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          ),
        }));
      }
    );
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
