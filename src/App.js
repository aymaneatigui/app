import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Nav } from './pages/Nav';
import { Forme } from './pages/Forme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
          <Router>
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Forme' element={<Forme />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>Page Not found</h1>} />
            </Routes>
          </Router>
          </QueryClientProvider>
    </div>
  );
}

export default App;
