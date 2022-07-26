import './App.css';
import Home from './Home';
import Nav from './Nav';
import Providers from './Providers';
import About from './About';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/providers' element={ <Providers /> } ></Route>
        <Route path='/about' element={ <About /> }></Route>
      </Routes>
    </>
  );
}

export default App;
