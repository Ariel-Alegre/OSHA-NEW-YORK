import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./components/Employee/Employee";
import Target from "./components/Target-Employee/Target";
import Register from './components/Register/Register';
import RegisterCardOrange from './components/Register/RegisterCardOrange/RegisterCardOrange';
import Error from './components/Error/Error';



function App() {
  return (
    <div>

      <NavBar />
      <BrowserRouter >
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/employee/:employeCard' element={<Employee />} />
            <Route exact path='/target/:cardTarget' element={<Target />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/registers' element={<RegisterCardOrange />} />
            <Route exact path='/error' element={<Error />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
