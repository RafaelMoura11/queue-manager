import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
