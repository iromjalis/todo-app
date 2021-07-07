import React, { Component } from "react";
import "./App.css";
import Panel from "./components/Panel";
// import Counter from "./components/Counter";
// import Profile from "./components/Profile";
import Phonebook from "./components/Phonebook/Phonebook";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter";
import SignUpForm from "./components/SignUpForm";

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
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  onChange = (e) => {
    console.log("value", e.target.value);

    this.setState({ value: e.target.value });
  };

  render() {
    const { todos, onChange, filter } = this.state;
    return (
      <div className="App">
        <SignUpForm />
        <header className="App-header" />
        {/* <Panel title="User profile"> 
          <Profile user={user} />
          <Counter step={1} />
        </Panel>*/}

        <Phonebook />
        <Filter value={this.state.value} onChange={this.onChange} />
        <TodoList todos={this.state.todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
