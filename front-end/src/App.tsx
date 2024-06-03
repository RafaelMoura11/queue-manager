import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Menu from './pages/Menu';
import QueueForm from './pages/QueueForm';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="/queue-form" element={ <QueueForm /> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
