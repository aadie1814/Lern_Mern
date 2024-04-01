import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import Header from "./components/Header";
import AdminPage from "./layouts/AdminPage";
import AdminUser from "./components/AdminUser";
import AdminContact from "./components/AdminContacts";
/* import Logout from "./components/Logout"; */
import AdminServices from "./components/AdminServices";
import AdminDeleteService from "./components/AdminDeleteServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/admin' element={<AdminPage />}>
            <Route path='user' element={<AdminUser />}></Route>
            <Route path='contact' element={<AdminContact />}></Route>
            <Route path='services'element={<AdminServices/>}></Route>
              <Route path='deleteservice'element={<AdminDeleteService/>}></Route>
              
          </Route>
          <Route path='/error' element={<Error />}></Route>
         {/*  <Route path='/logout'element={<Logout/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
