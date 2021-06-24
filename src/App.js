//styles
import './App.css';

//components
import Container from './components/Container/Container.js';
import Todo from './components/Todo/Todo.js';
import TodoList from './components/TodoList/TodoList.js';

//data
const data = {
  price: 1000,
  title: 'Data',
};

const App = () => {
  return (
    <>
      <Container>
        <header className="App-header">
          <Todo price={data.price} title={data.title}>
            <TodoList />
          </Todo>
        </header>
      </Container>

      <div className="App">
        <h1>next App component</h1>
      </div>
    </>
  );
};

export default App;
