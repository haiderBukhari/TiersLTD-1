import { useState } from 'react'
import './App.css'
import ReactRoutes from './routes'
import { Header } from './components/Header/Header';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  return (
    <>
      {
        (location.pathname === '/miner' || location.pathname === '/miner2' || location.pathname === '/miner3' || location.pathname === '/miner4' || location.pathname === '/register') && <Header show={show} setShow={setShow} />
      }
      {
        !show && <ReactRoutes />
      }
    </>
  )
}

export default App
