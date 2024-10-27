import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Registers from './pages/Registers/Registers';

// Install lib react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import DemoUseState from './pages/Hook/DemoUseState/DemoUseState';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/home" element={
          <Home />
        } />

        <Route exact path="/about" element={
          <About />
        } />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/registers" element={<Registers />}/>
        <Route exact path="/use-state" element={<DemoUseState />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
