import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Registers from './pages/Registers/Registers';

// Install lib react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route exact path="/home" render={() => {
          return <div className='container'>
            <Home/>
          </div>
        }} />

        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registers" component={Registers}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
