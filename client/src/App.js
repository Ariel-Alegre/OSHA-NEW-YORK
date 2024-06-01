import React from 'react';
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./pages/Employee";
import Target from "./pages/Target";
import AdminComplete from './components/AdminComplete/AdminComplete';
import Error from './components/Error/Error';
import Test from './pages/UpdateEmployee';
import Register from './pages/Register';
import RegisterCardOrange from './pages/RegisterCardOrange';
import AllEmployee from './pages/AllEmployee';
import UpdateEmployee from './pages/UpdateEmployee';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/employee/:employeCard' element={<Employee />} />
          <Route exact path='/target/:cardTarget' element={<Target />} />
          <Route exact path='/error' element={<Error />} />
          <Route exact path='/test' element={<Test />} />

          <Route path='/admin' element={<AdminComplete />}>
          <Route index element={<Register />} />

          <Route path='register' element={<Register />} />

            <Route path='card-orange' element={<RegisterCardOrange />} />
            <Route path='all-employes' element={<AllEmployee />} />
            <Route path='update-employee/:id' element={<UpdateEmployee />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
