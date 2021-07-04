import styles from "./App.module.css";
import Panel from "./components/Panel";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">Todo App</header>
      <Panel title="User profile">
        <Profile name="Mango" email="mango@mail.com" />
        <Counter />
      </Panel>
    </div>
  );
}

export default App;
