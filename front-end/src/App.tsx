import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import Provider from './context/Provider';
import Menu from './pages/Menu';
import QueueForm from './pages/QueueForm';
import Queues from './pages/Queues';
import Reservations from './pages/Reservations';
import Login from './pages/Login';
import ReservationForm from './pages/ReservationForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="/queue-form" element={ <QueueForm /> } />
          <Route path="/queues" element={ <Queues /> } />
          <Route path="/reservation-form" element={ <ReservationForm /> } />
          <Route path="/reservations" element={ <Reservations /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
