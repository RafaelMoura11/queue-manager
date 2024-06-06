import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Menu from './pages/Menu';
import QueueForm from './pages/QueueForm';
import Queues from './pages/Queues';
import Reservations from './pages/Reservations';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="/queue-form" element={ <QueueForm /> } />
          <Route path="/queues" element={ <Queues /> } />
          <Route path="/reservations" element={ <Reservations /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
