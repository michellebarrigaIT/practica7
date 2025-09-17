import './App.scss'
import Counter from './components/KeyboardControlledCounter';
import UserCard from './components/UserCard';

function App() {

  const sayHello = (userName: string) => {
    alert(`Hello, ${userName}!`);
  };

  return (
    <>
      <h1>Exercise 4</h1>
      <Counter/>
      <h1>Exercise 2</h1>
      <div className="user-list">
        <UserCard name="Pepito" age={18} onClick={sayHello} />
        <UserCard name="Maria" age={30} onClick={sayHello} />
      </div>
    </>
  );
}

export default App;
