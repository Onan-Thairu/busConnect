import './App.css';
import { useState } from 'react';
import Home from './Home';
import Nav from './Nav';
import Providers from './Providers';
import ProviderDetail from './ProviderDetail';
import About from './About';
import { Routes, Route } from "react-router-dom"
import BookingForm from './BookingForm';

function App() {
  const [transporters, setTransporters] = useState([])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/providers' element={ <Providers transporters={transporters} setTransporters={setTransporters} /> } ></Route>
        <Route path='/about' element={ <About /> }></Route>
        <Route path='/providers/:providerName' element={ <ProviderDetail transporters={transporters} /> }></Route>
        <Route path='/booking-form' element={ <BookingForm /> } />
      </Routes>
    </>
  );
}

export default App;
