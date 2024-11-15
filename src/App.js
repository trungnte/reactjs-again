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
import DemoUseEffect from './pages/Hook/DemoEffect/DemoUseEffect';
import DemoUseCallback from './pages/Hook/DemoUseCallback/DemoUseCallback';
import DemoUseMemo from './pages/Hook/DemoUseMemo/DemoUseMemo';
import DemoUseRef from './pages/Hook/DemoUseRef/DemoUseRef';

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
        <Route exact path="/use-effect" element={<DemoUseEffect />} />
        <Route exact path="/use-callback" element={<DemoUseCallback />} />
        <Route exact path="/use-memo" element={<DemoUseMemo />} />
        <Route exact path="/use-ref" element={<DemoUseRef />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
