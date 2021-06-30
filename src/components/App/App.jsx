import React, { PureComponent, Component } from 'react';
import { v4 as uuid } from 'uuid';

// shared
import Container from '../../shared/components/Container/Container';
import Row from '../../shared/components/Row/Row';

// components
import AddToDo from '../AddToDo';
import SearchPanel from '../SearchPanel/SearchPanel';
import ToDoList from '../ToDoList/ToDoList';
import ToDoHeader from '../ToDoListHeader/ToDoHeader';
import StatusFilter from '../StatusFilter';
// import StateDebuger from "../../shared/components/StateDebuger";

/*
    -Todos

    1. created state  state = { todos: [], filter: 'all', search: '' };
    2. created helper method createItem(label: type string): returned object { 
      id: uuid() yarn add uuid or npm i uuid, 
      label, 
      important: false,
      done: false,  
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    3. created public method handleAddToDo(label: type string): void ;
    4. created method public handleDelete(id: type string): void;
    5. created method handleDone(id: string): void;
    6. created method handleImportant(id: string);
    7. refactoring methods handleDone, handleImportant and making reusable logic;
    8. 
*/

const FilterEnum = {
  ALL: 'all',
  DONE: 'done',
  ACTIVE: 'active',
};

class App extends PureComponent {
  state = {
    todos: [],
    filter: FilterEnum.ALL,
    search: '',
    age: '',
    agreed: false,
    gender: '',
  };

  handleDelete = id => {
    this.setState(state => {
      const idx = state.todos.findIndex(item => item.id === id);
      const todos = [
        ...state.todos.slice(0, idx),
        ...state.todos.slice(idx + 1),
      ];
      // console.time("TODOS_FILTER_DELETE");
      // const todos = state.todos.filter((item) => item.id !== id);
      // console.timeEnd("TODOS_FILTER_DELETE");
      return {
        todos,
      };
    });
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    if (todos.length) {
      this.setState({ todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const { todos } = this.state;
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  handleSearchChange = search => {
    this.setState({ search });
  };

  handleAddToDo = label => {
    this.setState(prevState => {
      const todo = prevState.todos.filter(todo => todo === label);
      if (todo) {
        alert('Error');
        return;
      }
      const item = this.createItem(label);
      const todos = [...prevState.todos, item];

      return {
        todos,
      };
    });
  };

  handleDone = id => {
    this.setState(state => {
      const todos = this.toggleProperty(state, id, 'done');
      return {
        todos,
      };
    });
  };

  handleImportant = id => {
    this.setState(state => {
      const todos = this.toggleProperty(state, id, 'important');
      return {
        todos,
      };
    });
  };

  toggleProperty(state, id, propName) {
    const todos = state.todos.map(todo => {
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

  createItem(label) {
    return {
      id: uuid(),
      label,
      important: false,
      done: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
  }

  filter(todos, filter) {
    switch (filter) {
      case FilterEnum.ALL:
        return todos;
      case FilterEnum.ACTIVE:
        return todos.filter(todo => !todo.done);
      case FilterEnum.DONE:
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  }

  search(todos, searchStr) {
    if (!searchStr) {
      return todos;
    }
    // old
    // return todos.filter(
    //   (todo) => todo.label.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
    // );
    // new
    return todos.filter(todo =>
      todo.label.toLowerCase().includes(searchStr.toLowerCase()),
    );
  }

  render() {
    const { todos, filter, search, age } = this.state;
    const doneCount = todos.filter(item => item.done).length;
    const toDoCount = todos.length - doneCount;
    const visibleItems = this.search(this.filter(todos, filter), search);

    const important = todos.filter(todo => todo.important);
    return (
      <Container>
        {/* <StateDebuger object={this.state} /> */}
        <Row>
          <div className="col-6 offset-3 mt-5">
            <ToDoHeader
              toDo={toDoCount}
              done={doneCount}
              important={Number(important.length)}
            />
            <div className="search-panel d-flex mb-3">
              <SearchPanel handleSearchChange={this.handleSearchChange} />
              <StatusFilter
                filter={filter}
                handleFilterChange={this.handleFilterChange}
              />
            </div>
            <ToDoList
              todos={visibleItems}
              handleDelete={this.handleDelete}
              handleDone={this.handleDone}
              handleImportant={this.handleImportant}
            />
            <AddToDo handleAddToDo={this.handleAddToDo} />
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
