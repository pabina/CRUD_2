import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path='/allUsers' element={ <AllUsers/>}/>
          <Route path='/Addusers' element={ <AddUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}>

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App