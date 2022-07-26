import './App.css';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
