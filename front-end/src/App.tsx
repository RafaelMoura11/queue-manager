import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Menu from './pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={ <Menu /> }></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
