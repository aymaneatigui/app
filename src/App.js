import './App.css';
import { Person } from './Person';

function App() {

  return (
    <div className="App">
      <Person 
        name="oussama"
        age="21"
        friends={["aymane","ayoub"]}
      />
    </div>
  );
}

export default App;
