import logo from './logo.svg';
import './App.css';
import Hello from './components/HelloWords';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <h1>Olá Mundo - bora codar react? </h1>
        <Hello />
        <Frase />
      </header>
    </div>
  );
}

export default App;
