import './App.css';
import { useToggle } from './useToggle';

function App() {
  const [isVisible, Toggle] = useToggle()

  return (
    <div className="App">
      <button onClick={Toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1> Hidden text</h1>}
    </div>
  );
}

export default App;
