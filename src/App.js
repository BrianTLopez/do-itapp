import './styles/App.css';
//Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/App/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/app" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
