import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/Allusers' element={ <AllUsers/>}/>
          <Route path='/Addusers' element={ <AddUser/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App