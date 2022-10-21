
import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/apartments' element={<ApartmentsList />} />
        <Route path='/apartments/:appNum' element={<ApartmentDetails />} />
        <Route path='/apartments/create' element={<CreateApartment />} />
      </Routes>
      
    </div>
  );
}

export default App;
