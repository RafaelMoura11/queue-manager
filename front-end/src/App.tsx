import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Menu from './pages/Menu';
import QueueForm from './pages/QueueForm';
import Queues from './pages/Queues';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="/queue-form" element={ <QueueForm /> } />
          <Route path="/queues" element={ <Queues /> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
